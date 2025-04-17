import { environment } from "../config/environment";
import {
  Intimacao,
  IntimacaoResponse,
  DgenResponse,
  APIIntimacao,
  JsonValidationResult,
} from "../types/interfaces";
import {
  getCurrentDate,
  addBusinessDays,
  formatDateForAPI,
  getSearchDate,
} from "../utils/dateUtils";
import { handleJsonResponse } from "../utils/jsonUtils";
import { TribunalType } from "../config/environment";
import { DgenService } from "./dgenService";
import { FeriadosService } from "./feriadosService";

export class IntimacaoService {
  private finalData: Record<string, Intimacao[]> = {};
  private dgenService: DgenService;
  private feriadosService: FeriadosService;

  constructor() {
    this.dgenService = new DgenService();
    this.feriadosService = new FeriadosService();
    for (const name of environment.NAMES_TO_SEARCH) {
      this.finalData[name] = [];
    }
  }

  private async fetchIntimacoes(nome: string): Promise<IntimacaoResponse> {
    try {
      const searchDate = formatDateForAPI(new Date(getSearchDate()));
      const url = `${environment.API_URL}?nomeAdvogado=${nome}&dataDisponibilizacaoInicio=${searchDate}&dataDisponibilizacaoFim=${searchDate}`;

      console.log(
        `[INFO] Buscando intimações - Data: ${searchDate} - Advogado: ${nome}`
      );

      // Usando AbortController para implementar timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 segundos

      const response = await fetch(url, {
        signal: controller.signal,
      });

      clearTimeout(timeoutId); // Limpa o timeout se a requisição completar

      // Verifica se a resposta é OK e se o Content-Type é JSON
      if (!response.ok) {
        throw new Error(`API retornou status ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) {
        throw new Error(`API retornou formato inválido: ${contentType}`);
      }

      const data = await response.json();
      return data as IntimacaoResponse;
    } catch (error) {
      // Tratamento específico para erro de timeout
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          console.error(`[ERROR] Timeout ao buscar intimações para ${nome}`);
        } else {
          console.error(
            `[ERROR] Falha ao buscar intimações para ${nome}:`,
            error.message
          );
        }
      }

      // Retorna uma resposta vazia mas válida para não quebrar o fluxo
      return {
        status: "error",
        items: [], // Removido o campo 'message' pois não está na interface
        count: 0, // Adicionado campo 'count'
      };
    }
  }

  private async analisarTexto(
    texto: string
  ): Promise<JsonValidationResult<DgenResponse>> {
    return this.dgenService.analisarTexto(texto);
  }

  private async calcularDataEsperada(intimacao: Intimacao): Promise<void> {
    // Garantir que a data está no timezone correto e sem horas/minutos/segundos
    const dataInicioPrazo = new Date(
      intimacao.data_disponibilizacao.split("T")[0] + "T00:00:00-03:00"
    );
    dataInicioPrazo.setDate(dataInicioPrazo.getDate() + 1);

    const tribunal = intimacao.sigla_tribunal as TribunalType;
    const prazoDefault = environment.DEFAULT_DEADLINES[tribunal];

    const feriados = await this.feriadosService.obterFeriadosTribunal(tribunal);

    console.log("[LOG] Feriados - ", feriados);

    intimacao.data_esperada_manifestacao = addBusinessDays(
      dataInicioPrazo,
      intimacao.prazo_manifestacao || prazoDefault,
      feriados
    );

    console.log(`[LOG] Cálculo de Datas - Intimação ${intimacao.id}:
        - Tribunal: ${intimacao.sigla_tribunal}
        - Data disponibilização: ${intimacao.data_disponibilizacao}
        - Data início prazo: ${dataInicioPrazo.toISOString()}
        - Prazo em dias: ${intimacao.prazo_manifestacao || prazoDefault}
        - Data final calculada: ${intimacao.data_esperada_manifestacao}
        `);
  }

  private mapearIntimacao(
    item: APIIntimacao,
    analise: DgenResponse
  ): Intimacao {
    const tribunal = item.siglaTribunal as TribunalType;
    const prazoDefault = environment.DEFAULT_DEADLINES[tribunal];

    // Garantir que estamos usando a data de disponibilização correta
    const dataDisponibilizacao = item.data_disponibilizacao;

    return {
      id: item.id,
      data_disponibilizacao: dataDisponibilizacao, // Usar a data da API diretamente
      sigla_tribunal: item.siglaTribunal,
      tipo_comunicacao: item.tipoComunicacao,
      texto: item.texto,
      tipo_ato: analise.tipo_ato,
      prazo_manifestacao: analise.prazo_manifestacao || prazoDefault,
    };
  }

  private async processarIntimacao(nome: string): Promise<void> {
    console.log(`[LOG] Buscando intimações para: ${nome}...`);

    const response = await this.fetchIntimacoes(nome);

    if (!response || !response.status) {
      console.error(`[ERROR] API não retornou resposta válida para ${nome}.`);
      return;
    }

    if (response.status !== "success") {
      console.warn(`[WARN] Nenhum dado retornado para ${nome}.`);
      return;
    }

    for (const item of response.items) {
      const dataDisponibilizacao = new Date(
        item.data_disponibilizacao + "T00:00:00-03:00"
      );
      const dataDesejada = new Date(getSearchDate() + "T00:00:00-03:00");

      console.log(`[DEBUG] Intimação ${item.id}:
            - Data da API: ${item.data_disponibilizacao}
            - Data após new Date: ${dataDisponibilizacao.toISOString()}`);

      // 3. Compara as datas (convertendo para YYYY-MM-DD para ignorar horários)
      if (
        dataDisponibilizacao.toISOString().split("T")[0] !==
        dataDesejada.toISOString().split("T")[0]
      ) {
        console.log(
          `[LOG] Pulando intimação de ${dataDisponibilizacao.toLocaleDateString()} - fora do período desejado`
        );
        continue;
      }

      const analise = await this.analisarTexto(item.texto);

      if (analise.status === "valid" && typeof analise.response !== "string") {
        console.log(
          "[LOG] Prazo de manifestação:",
          analise.response.prazo_manifestacao
        );
        console.log("[LOG] Modelo respondeu com JSON Válido");
        const intimacao = this.mapearIntimacao(item, analise.response);
        await this.calcularDataEsperada(intimacao);
        this.finalData[nome].push(intimacao);
      } else {
        console.warn(
          "[WARN]: Modelo respondeu com JSON inválido:",
          analise.response
        );
      }
    }
  }

  public async processarTodasIntimacoes(): Promise<
    Record<string, Intimacao[]>
  > {
    console.log("[INFO] Iniciando processamento de intimações");

    for (const nome of environment.NAMES_TO_SEARCH) {
      await this.processarIntimacao(nome);
      // Log individual por advogado
      console.log(
        `[INFO] Advogado: ${nome} - Intimações encontradas: ${this.finalData[nome].length}`
      );
    }

    const total = Object.values(this.finalData).reduce(
      (acc, arr) => acc + arr.length,
      0
    );
    console.log(`[INFO] Total de intimações processadas: ${total}`);

    return this.finalData;
  }
}

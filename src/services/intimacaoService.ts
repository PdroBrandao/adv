import { environment } from '../config/environment';
import { 
    Intimacao, 
    IntimacaoResponse, 
    DgenResponse, 
    APIIntimacao,
    JsonValidationResult 
} from '../types/interfaces';
import { getCurrentDate, addBusinessDays } from '../utils/dateUtils';
import { handleJsonResponse } from '../utils/jsonUtils';
import { TribunalType } from '../config/environment';
import { DgenService } from './dgenService';

export class IntimacaoService {
    private finalData: Record<string, Intimacao[]> = {};
    private dgenService: DgenService;

    constructor() {
        this.dgenService = new DgenService();
        for (const name of environment.NAMES_TO_SEARCH) {
            this.finalData[name] = [];
        }
    }

    private async fetchIntimacoes(nome: string): Promise<IntimacaoResponse> {
        const now = getCurrentDate();
        const url = `${environment.API_URL}?nomeAdvogado=${nome}&dataDisponibilizacaoInicio=${now}&dataDisponibilizacaoFim=${now}`;
        
        console.log('[LOG] URL: ', url);
        const response = await fetch(url);
        return response.json();
    }

    private async analisarTexto(texto: string): Promise<JsonValidationResult<DgenResponse>> {
        return this.dgenService.analisarTexto(texto);
    }

    private calcularDataEsperada(intimacao: Intimacao): void {
        const today = new Date();
        const tribunal = intimacao.sigla_tribunal as TribunalType;
        
        if (!(tribunal in environment.DEFAULT_DEADLINES)) {
            console.warn(`[WARN] Tribunal ${tribunal} não encontrado nos prazos padrão`);
            return;
        }
        
        const prazoDefault = environment.DEFAULT_DEADLINES[tribunal];
        
        intimacao.data_esperada_manifestacao = addBusinessDays(
            today,
            intimacao.prazo_manifestacao || prazoDefault
        );
    }

    private mapearIntimacao(item: APIIntimacao, analise: DgenResponse): Intimacao {
        return {
            id: item.id,
            data_disponibilizacao: item.data_disponibilizacao,
            sigla_tribunal: item.siglaTribunal,
            tipo_comunicacao: item.tipoComunicacao,
            texto: item.texto,
            tipo_ato: analise.tipo_ato,
            prazo_manifestacao: analise.prazo_manifestacao
        };
    }

    private async processarIntimacao(nome: string): Promise<void> {
        console.log(`[LOG] Buscando intimações para: ${nome}...`);
        
        const response = await this.fetchIntimacoes(nome);
        console.log(response);
        
        if (!response || !response.status) {
            console.error(`[ERROR] API não retornou resposta válida para ${nome}.`);
            return;
        }

        if (response.status !== "success") {
            console.warn(`[WARN] Nenhum dado retornado para ${nome}.`);
            return;
        }

        console.table({ status: response.status, registros: response.count });

        for (const item of response.items) {
            const analise = await this.analisarTexto(item.texto);
            
            if (analise.status === "valid" && typeof analise.response !== 'string') {
                console.log("[LOG] Modelo respondeu com JSON Válido");
                const intimacao = this.mapearIntimacao(item, analise.response);
                this.calcularDataEsperada(intimacao);
                this.finalData[nome].push(intimacao);
            } else {
                console.warn("[WARN]: Modelo respondeu com JSON inválido:", analise.response);
            }
        }
    }

    public async processarTodasIntimacoes(): Promise<Record<string, Intimacao[]>> {
        console.log("[LOG] Iniciando busca para todos os nomes...");
        console.log(this.finalData);
        
        for (const nome of environment.NAMES_TO_SEARCH) {
            await this.processarIntimacao(nome);
        }
        
        console.log("[LOG] Extração de dados finalizada");
        console.table(this.finalData, ["length"]);
        
        return this.finalData;
    }
}

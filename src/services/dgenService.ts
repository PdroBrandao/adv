import { DgenResponse, JsonValidationResult, ChatGPTResponse } from '../types/interfaces';
import { handleJsonResponse } from '../utils/jsonUtils';
import { environment } from '../config/environment';

export class DgenService {
  constructor(
    private readonly apiUrl: string = environment.API_MODEL_URL,
    private readonly apiKey: string = environment.API_KEY
  ) {}

  async analisarTexto(texto: string): Promise<JsonValidationResult<DgenResponse>> {
    try {
      const prompt = this.construirPrompt(texto);
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ]
        })
      });

      const data = await response.json() as ChatGPTResponse;
      
      if (!data.choices || !data.choices[0]?.message?.content) {
        console.error('[ERROR] ChatGPT retornou resposta inválida');
        return { status: 'invalid', response: 'Resposta inválida do ChatGPT' };
      }

      return handleJsonResponse<DgenResponse>(data.choices[0].message.content);
    } catch (error) {
      console.error('Erro ao processar texto:', error);
      return { status: 'invalid', response: String(error) };
    }
  }

  private construirPrompt(texto: string): string {
    return `Instruções:\n
A partir do texto abaixo, extraia e retorne apenas as seguintes informações, se disponíveis:\n
Tipo de Ato Processual (ex: decisão, despacho, sentença)\n
Prazo para Manifestação (caso mencionado explicitamente)\n
Caso algum dos dados não seja encontrado, retorne NULL no campo em questão\n
Retorne APENAS o conteúdo DO JSON, NADA MAIS\n
Não responda com nada que não seja um JSON\n
Texto da intimação:\n
${texto}\n
Saída esperada:\n
{\
  \"tipo_ato\": \"Despacho/Sentença/Outro\",\
  \"prazo_manifestacao\": 5\
}

O prazo_manifestacao deve SEMPRE ser retornado em DIAS.
O prazo_manifestacao deve ser preenchido com a quantidade de dias que compõem o prazo da manifestação.
O prazo_manifestacao deve SEMPRE ser retornado como número, nunca como texto.`;
  }
}
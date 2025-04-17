// Interface que representa a estrutura exata que vem da API
export interface APIIntimacao {
  id: string;
  data_disponibilizacao: string;
  siglaTribunal: string;
  tipoComunicacao: string;
  texto: string;
}

// Interface para uso interno na aplicação
export interface Intimacao {
  id: string;
  data_disponibilizacao: string;
  sigla_tribunal: string;
  tipo_comunicacao: string;
  texto: string;
  tipo_ato?: string;
  prazo_manifestacao?: number;
  data_esperada_manifestacao?: string;
}

export interface IntimacaoResponse {
  status: string;
  count: number;
  items: APIIntimacao[];
}

export interface DgenResponse {
  tipo_ato: string;
  prazo_manifestacao: number;
}

// Interface para o resultado da validação do JSON
export interface JsonValidationResult<T> {
  status: "valid" | "invalid";
  response: T | string;
}

// Interface para a resposta da API do ChatGPT
export interface ChatGPTResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface FeriadoTribunal {
  siglaTribunal: string;
  data: string;
}

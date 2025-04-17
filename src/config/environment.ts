declare const process: {
  env: {
    API_KEY?: string;
    GOOGLE_CREDENTIALS?: string;
    NODE_ENV?: string;
  };
};

export const environment = {
  API_URL: "https://comunicaapi.pje.jus.br/api/v1/comunicacao",
  API_MODEL_URL: "https://api.openai.com/v1/chat/completions",
  API_KEY: process.env.API_KEY || "",
  GOOGLE_CREDENTIALS: process.env.GOOGLE_CREDENTIALS || "",
  SPREADSHEET_ID: "1CnLhImZkeugQRIVDv89fU1lE7l1HltRAx5U95ZglHew",
  DEFAULT_DEADLINES: {
    TJMG: 15,
    TRT3: 5,
  } as const,
  NAMES_TO_SEARCH: [
    "Pedro Abder Nunes Raim Ramos",
    "Alfredo Ramos Neto",
    "Jussara Emanoely Guimaraes Rodrigues",
  ] as const,
  USE_STATIC_DATE: true,
  STATIC_DATE: "2025-04-07",
} as const;

// Tipo para os tribunais suportados
export type TribunalType = keyof typeof environment.DEFAULT_DEADLINES;

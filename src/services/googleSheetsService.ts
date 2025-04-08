import { GoogleSheetsConfig } from '../config/googleSheets';
import { Intimacao } from '../types/interfaces';
import { formatDateToBR } from '../utils/dateUtils';

export class GoogleSheetsService {
    private static instance: GoogleSheetsService;
    private sheetsConfig: GoogleSheetsConfig;

    private constructor(sheetsConfig: GoogleSheetsConfig) {
        this.sheetsConfig = sheetsConfig;
    }

    public static async getInstance(): Promise<GoogleSheetsService> {
        if (!GoogleSheetsService.instance) {
            const sheetsConfig = await GoogleSheetsConfig.getInstance();
            GoogleSheetsService.instance = new GoogleSheetsService(sheetsConfig);
        }
        return GoogleSheetsService.instance;
    }

    public async saveIntimacoes(intimacoesPorAdvogado: Record<string, Intimacao[]>): Promise<void> {
        for (const [_, intimacoes] of Object.entries(intimacoesPorAdvogado)) {
            for (const intimacao of intimacoes) {
                const values = [
                    [
                        intimacao.id,
                        formatDateToBR(new Date(intimacao.data_disponibilizacao)),
                        intimacao.sigla_tribunal,
                        intimacao.tipo_comunicacao,
                        intimacao.data_esperada_manifestacao || '',
                        intimacao.texto
                    ]
                ];

                await this.sheetsConfig.appendToSheet(values);
            }
        }
    }
}

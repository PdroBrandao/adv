import { IntimacaoService } from './services/intimacaoService';
import { GoogleSheetsService } from './services/googleSheetsService';

async function main() {
    try {
        const intimacaoService = new IntimacaoService();
        const googleSheetsService = await GoogleSheetsService.getInstance();

        const intimacoes = await intimacaoService.processarTodasIntimacoes();
        await googleSheetsService.saveIntimacoes(intimacoes);
        
        console.log('Processo finalizado com sucesso!');
    } catch (error) {
        console.error('Erro durante a execução:', error);
    }
}

main();

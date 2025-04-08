export function addBusinessDays(startDate: Date, daysToAdd: number): string {
    let currentDate = new Date(startDate);
    let addedDays = 0;

    while (addedDays < daysToAdd) {
        currentDate.setDate(currentDate.getDate() + 1);
        const dayOfWeek = currentDate.getDay();

        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
            addedDays++;
        }
    }
    return currentDate.toLocaleDateString('pt-BR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: '2-digit' 
    });
}

export function getCurrentDate(): string {
    // Dynamic date for production
    // return new Date().toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', year: 'numeric' });
    
    // Static date for testing
    return new Date('2024-08-27').toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', year: 'numeric' });
}

export function formatDateToBR(date: Date): string {
    return date.toLocaleDateString('pt-BR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: '2-digit' 
    });
}

// Nova função para formatar a data para a API
export function formatDateForAPI(date: Date): string {
    return date.toISOString().split('T')[0]; // Retorna YYYY-MM-DD
}

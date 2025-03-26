const APIUrl = "https://comunicaapi.pje.jus.br/api/v1/comunicacao"

// Params: nomeAdvogado, dataDisponibilizacaoInicio, dataDisponibilizacaoFim

const namesToSearch = [
    'Pedro Abder Nunes Raim Ramos',
    'Alfredo Ramos Neto',
    'Jussara Emanoely Guimaraes Rodrigues'
]

/*

Iteraremos por todas as intimações do dia, por pessoa, e salvaremos as seguintes informações:

id
data_disponibilizacao
siglaTribunal
tipoComunicacao
texto

*/
const fetchSumons = () => {
    const now = new Date().toDateString()
    const request = fetch(`${APIUrl}?nomeAdvogado=${namesToSearch[0]}&dataDisponibilizacaoInicio=${now}&dataDisponibilizacaoFim=${now}`).then(response=> response.json())
    request.then(response => console.log(response))
}




const handleJsonResponse = (JSONStringRaw) => {

    // Exemplo de JSON Raw
    // const JSONStringRaw = "```json\n{\n  \"tipo_ato\": \"INTIMAÇÃO DE AUDIÊNCIA\",\n  \"prazo_manifestacao\": \"cinco dias úteis\"\n}\n```"

    if(!JSONStringRaw) return

    const pipes = [
        (text) => text.replaceAll('```json', '').replaceAll('```', ''),
    ]
    
    
    let JSONString

    for (const pipe of pipes) {
        JSONString = pipe(JSONStringRaw)
    }
    
    try {
        const validJson = JSON.parse(JSONString)

        return {'status': 'valid', 'response': validJson}
    }
    
    catch(e) {
        return {'status': 'invalid', response: e.message}
    }

} 


console.log(handleJsonResponse("```json\n{\n  \"tipo_ato\": \"INTIMAÇÃO DE AUDIÊNCIA\",\n  \"prazo_manifestacao\": \"cinco dias úteis\"\n}\n```"))

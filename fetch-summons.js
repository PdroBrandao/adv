const APIUrl = "https://comunicaapi.pje.jus.br/api/v1/comunicacao";
const APIModelURL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBSnO2oNTWrpbqeNYhP7YoaN5TrmPuZD3Q";
const finalData = {};

// Params: nomeAdvogado, dataDisponibilizacaoInicio, dataDisponibilizacaoFim

const namesToSearch = [
  "Pedro Abder Nunes Raim Ramos",
  "Alfredo Ramos Neto",
  "Jussara Emanoely Guimaraes Rodrigues",
];

for (const name of namesToSearch) {
  finalData[name] = [];
}

console.log(finalData);

/*

Iteraremos por todas as intimações do dia, por pessoa, e salvaremos as seguintes informações:

id
data_disponibilizacao
siglaTribunal
tipoComunicacao
texto

*/
const fetchSumons = async (name) => {
  const now = new Date().toDateString();
  const request = await fetch(
    `${APIUrl}?nomeAdvogado=${name}&dataDisponibilizacaoInicio=${now}&dataDisponibilizacaoFim=${now}`
  ).then((response) => response.json());
  return request;
};

const handleJsonResponse = (JSONStringRaw) => {
  // Exemplo de JSON Raw
  // const JSONStringRaw = "```json\n{\n  \"tipo_ato\": \"INTIMAÇÃO DE AUDIÊNCIA\",\n  \"prazo_manifestacao\": \"cinco dias úteis\"\n}\n```"

  if (!JSONStringRaw) return;

  const pipes = [
    (text) => text.replaceAll("```json", "").replaceAll("```", ""),
  ];

  let JSONString;

  for (const pipe of pipes) {
    JSONString = pipe(JSONStringRaw);
  }

  try {
    const validJson = JSON.parse(JSONString);

    return { status: "valid", response: validJson };
  } catch (e) {
    return { status: "invalid", response: e.message };
  }
};

const handleText = async (text) => {
  const prompt = `Instruções:\n
A partir do texto abaixo, extraia e retorne apenas as seguintes informações, se disponíveis:\n
Tipo de Ato Processual (ex: decisão, despacho, sentença)\n
Prazo para Manifestação (caso mencionado explicitamente)\n
Caso algum dos dados não seja encontrado, retorne NULL no campo em questão\n
Retorne APENAS o conteúdo DO JSON, NADA MAIS\n
Não responda com nada que não seja um JSON\n
Texto da intimação:\n
${text}\n
Saída esperada:\n
{\
  \"tipo_ato\": \"Despacho/Sentença/Outro\",\
  \"prazo_manifestacao\": \"X dias úteis\",\
}`;

  const request = await fetch(`${APIModelURL}`, {
    method: "POST",
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: JSON.stringify(prompt),
            },
          ],
        },
      ],
    }),
  }).then((response) => response.json());

  if (request.error) {
    console.error(
      "[ERROR] Modelo retornou erro ao tentar extrair informações",
      request.error
    );
    return handleJsonResponse("");
  }

  const response = request.candidates[0].content.parts[0].text;
  return handleJsonResponse(response);
};

const execute = async (name) => {
  console.log(`[LOG] Buscando intimações para: ${name}...`);
  const summons = await fetchSumons(name);

  if (summons.status === "success") {
    console.table({
      status: summons.status,
      registros: summons.count,
    });

    const items = summons.items;
    for (const item of items) {
      const response = await handleText(item.texto);
      if (response.status === "valid") {
        console.log("[LOG] Modelo respondeu com JSON Válido");
        finalData[name].push({
          id: item.id,
          data_disponibilizacao: item.data_disponibilizacao,
          sigla_tribunal: item.siglaTribunal,
          tipo_comunicacao: item.tipoComunicacao,
          texto: item.texto,
          tipo_ato: response.response.tipo_ato,
          prazo_manifestacao: response.response.prazo_manifestacao,
        });
      } else {
        console.log([
          "[WARN]: Modelo respondeu com JSON inválido",
          response.response,
        ]);
      }
    }
  } else {
    console.error("[ERROR] Não foi possível obter os dados de intimações");
  }
};

for (const name of namesToSearch) {
  await execute(name);
}

console.log("[LOG] Extração de dados finalizada");
console.table(finalData, ["length"]);

console.log(finalData);

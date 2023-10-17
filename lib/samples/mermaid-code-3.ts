export const sampleMermaidCode = `graph TD;
start((Start)) --> clickForm("Clique no formulário");
clickForm --> fillText("Preencha com o texto");
fillText --> clickSubmit("Clique no botão submit");
clickSubmit --> waitLoading("Aguarde o loading");
waitLoading --> checkImage("Cheque se a imagem foi gerada");
checkImage --> finish((Finish));`;

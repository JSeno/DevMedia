const usuario = "Fabiana Teles";
const limiteChar = 10;

const validaCampo = usuario.length <= limiteChar;

if (validaCampo) {
  console.log("Dados válidos");
} else {
  console.log("O limite de caracteres é:" + limiteChar);
}

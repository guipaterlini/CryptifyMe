const btnCriptografar = document.getElementById("criptografar");
const btnDescriptografar = document.getElementById("descriptografar");
const inputTextArea = document.getElementById("inputTextArea");
const outputResult = document.getElementById("outputResult");
const outputCopyButton = document.getElementById("outputCopyButton");
const outputWithAnswer = document.getElementById("outputWithAnswer");
const outputNoAnswer = document.getElementById("outputNoAnswer");
const errorMessage = document.getElementById("errorMessage");

const chavesCriptografia = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

function criptografar(texto) {
  return texto
    .split("")
    .map((letra) => chavesCriptografia[letra] || letra)
    .join("");
}

btnCriptografar.addEventListener("click", function () {
  if (inputTextArea.value.trim() !== "") {
    const textoCriptografado = criptografar(inputTextArea.value);

    outputResult.textContent = textoCriptografado;

    outputNoAnswer.classList.remove("flex");
    outputNoAnswer.classList.add("disable");

    outputWithAnswer.classList.remove("disable");
    outputWithAnswer.classList.add("flex");

    inputTextArea.value = "";
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Insira uma mensagem primeiro!";
  }
});

// - validar minusculas e acentos
// - ajustar texto para nao vazar no output result
// - colocar feedback para o usuario nos botões
// - colocar para funcionar o botão de descriptografar
// - colocar para funcionar o botão de copiar

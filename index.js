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

const regex = /[A-ZÀ-Úà-ú]/;

function criptografar(texto) {
  return texto
    .split("")
    .map((letra) => chavesCriptografia[letra] || letra)
    .join("");
}

btnCriptografar.addEventListener("click", function () {
  if (inputTextArea.value.trim() == "") {
    errorMessage.textContent = "Insira uma mensagem primeiro!";
  } else {
    if (regex.test(inputTextArea.value)) {
      errorMessage.textContent = "Apenas letras minúsculas e sem acento!";
    } else {
      const textoCriptografado = criptografar(inputTextArea.value);

      outputResult.textContent = textoCriptografado;

      outputNoAnswer.classList.remove("flex");
      outputNoAnswer.classList.add("disable");

      outputWithAnswer.classList.remove("disable");
      outputWithAnswer.classList.add("flex");

      inputTextArea.value = "";
      errorMessage.textContent = "";
    }
  }
});

// - colocar feedback para o usuario nos botões
// - colocar para funcionar o botão de descriptografar
// - colocar para funcionar o botão de copiar
// - arrumar css, organizar propriedades, substituir os px por rem
// - buscar por otimizações com o chatgpt
const btnCriptografar = document.getElementById("criptografar");
const btnDescriptografar = document.getElementById("descriptografar");
const inputTextArea = document.getElementById("inputTextArea");
const outputResult = document.getElementById("outputResult");
const outputCopyButton = document.getElementById("outputCopyButton");
const outputWithAnswer = document.getElementById("outputWithAnswer");
const outputNoAnswer = document.getElementById("outputNoAnswer");

const chavesCriptografia = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

inputTextArea.addEventListener("input", function () {
  btnCriptografar.disabled = inputTextArea.value.trim() !== "" ? false : true;

  btnDescriptografar.disabled =
    inputTextArea.value.trim() !== "" ? false : true;
});

function criptografar(texto) {
  return texto
    .split("")
    .map((letra) => chavesCriptografia[letra] || letra)
    .join("");
}

btnCriptografar.addEventListener("click", function () {
  const textoCriptografado = criptografar(inputTextArea.value);

  outputResult.textContent = textoCriptografado;

  outputNoAnswer.classList.remove("flex");
  outputNoAnswer.classList.add("disable");

  outputWithAnswer.classList.remove("disable");
  outputWithAnswer.classList.add("flex");

  inputTextArea.value = "";
});

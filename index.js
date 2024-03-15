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

const chavesDescriptografia = {};

const regex = /[A-ZÀ-Úà-ú]/;

function criptografar(texto) {
  return texto
    .split("")
    .map((letra) => chavesCriptografia[letra] || letra)
    .join("");
}

function descriptografar(texto) {
  for (const chave in chavesCriptografia) {
    const valor = chavesCriptografia[chave];
    chavesDescriptografia[valor] = chave;
  }

  const regex = new RegExp(Object.keys(chavesDescriptografia).join("|"), "g");

  const substituir = (match) => chavesDescriptografia[match];

  return texto.replace(regex, substituir);
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

btnDescriptografar.addEventListener("click", function () {
  if (inputTextArea.value.trim() == "") {
    errorMessage.textContent = "Insira uma mensagem primeiro!";
  } else {
    if (regex.test(inputTextArea.value)) {
      errorMessage.textContent = "Apenas letras minúsculas e sem acento!";
    } else {
      const textoDescriptografado = descriptografar(inputTextArea.value);

      if (textoDescriptografado == inputTextArea.value) {
        errorMessage.textContent = "Esse texto não está criptografado!";
      } else {
        outputResult.textContent = textoDescriptografado;

        outputNoAnswer.classList.remove("flex");
        outputNoAnswer.classList.add("disable");

        outputWithAnswer.classList.remove("disable");
        outputWithAnswer.classList.add("flex");

        inputTextArea.value = "";
        errorMessage.textContent = "";
      }
    }
  }
});

outputCopyButton.addEventListener("click", function () {
  copiarTexto(outputResult.innerText);
});

function copiarTexto(texto) {
  const elementoTemporario = document.createElement("textarea");
  elementoTemporario.value = texto;
  document.body.appendChild(elementoTemporario);

  elementoTemporario.select();
  document.execCommand("copy");

  document.body.removeChild(elementoTemporario);

  outputCopyButton.textContent = "Copiado!";
  setTimeout(function () {
    outputCopyButton.textContent = "Copiar Texto";
  }, 2000);
}

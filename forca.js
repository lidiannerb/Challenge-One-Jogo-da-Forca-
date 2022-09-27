let palavras = ["ALURA", "PROGRAMAR", "JAVASCRIPT", "ORACLE", "LOGICA"];
let tabuleiro = document.getElementById("forca").getContext("2d");
let palavraSecreta = "";

function escolherPalavraSecreta () {
  let palavra = palavras[Math.floor(Math.random() * palavras.length)];
  palavraSecreta = palavra;
  console.log(palavraSecreta);
}


function iniciaJogo () {
  document.getElementById("section-desaparece").style.display = "none";
  escolherPalavraSecreta();
  desenharCanvas();
  desenharLinhas();
}
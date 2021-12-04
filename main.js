const btnChutar = document.getElementById("chutar");

btnChutar.addEventListener("click", () => {
  var numeroSecreto = Math.floor(Math.random() * 10);
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(numeroSecreto);
  if (numeroSecreto == chute) {
    resultado.innerHTML = "Parabéns!! Você acertou o número secreto.";
  } else {
    resultado.innerHTML = `Não foi desta vez. Tente novamente até acertar.`;
  }
  if (chute < 0 || chute > 10) {
    resultado.innerHTML = "Digite um valor entre 0 e 10.";
  }
  chute.value = "";
});

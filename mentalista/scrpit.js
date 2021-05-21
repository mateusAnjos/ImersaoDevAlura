var numeroSecreto = parseInt(Math.random()*10)
var tentativas = 3

while(tentativas > 0){

  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numeroSecreto == chute){
    alert("acertou")
    break
  }
  else if(chute > numeroSecreto){
    alert(`Errou. O número secreto é menor` )
    tentativa = tentativa--
  }
  else if (chute < numeroSecreto){
    alert(`Errou. O número secreto é maior`)
    tentativa = tentativa--
  }
}

if (chute != numeroSecreto){
  alert(`Suas tentativas acabaram! O número secreto era ${numeroSecreto}`)
}
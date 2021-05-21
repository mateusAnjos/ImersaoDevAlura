var operacao = prompt("Digite 1 para fazer uma divisão, 2 para fazer uma multiplicação, 3 para soma e 4 para subtração")
var primeiroValor = parseFloat(prompt("Digite o primeiro valor: "))
var segundoValor = parseFloat(prompt("Digite o segundo valor: "))
var operador = null

if(operacao ==1){
  resultado = primeiroValor/segundoValor
   operador = "/"
  document.write(`<h2>${primeiroValor} ${operador} ${segundoValor} = ${resultado}<h2>`)
}
else if(operacao==2){
 resultado = primeiroValor*segundoValor
 operador = "*"
  document.write(`<h2>${primeiroValor} ${operador} ${segundoValor} = ${resultado}<h2>`)
}
else if(operacao==3){
  resultado = primeiroValor+segundoValor
  operador = "+"
  document.write(`<h2>${primeiroValor} ${operador} ${segundoValor} = ${resultado}<h2>`)
}
else if(operacao==4){
  resultado = primeiroValor-segundoValor
  operador = "-"
  document.write(`<h2>${primeiroValor} ${operador} ${segundoValor} = ${resultado}<h2>`)
}
else{
 document.write(`<h2>Operação Inválida<h2>`)
}


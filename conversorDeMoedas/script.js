var valorDolar = prompt("Qual o valor em Dolar que você quer converter?")

valorDolar = parseFloat(valorDolar)

var valorEmReal = valorDolar * 5.50

alert(`A conversão do valor que você informou foi para R$ ${valorEmReal.toFixed(2)}`)
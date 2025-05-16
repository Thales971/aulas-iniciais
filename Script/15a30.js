// Contagem de números impares 15
let numero1 = 2
let numero2 = 3
let numero3 = 5

if ( numero1 % 2 ===0 ) {

    console.log (`${numero1} é par`)   
} else {
    console.log (`${numero1} é impar`)


} if ( numero2 % 2 === 0) {
    console.log (`${numero2} é par`)
} else {
console.log (`${numero2} é impar`)


} if ( numero3 % 2 ===0){
    console.log (`${numero3} é par`)
} else {
    console.log (`${numero3} é impar`)
}


// 16 comparaçao de preços por unidade

let preçoproduto1 = 8.00
let quantidadeproduto1 = 400

let preçoproduto2 = 3.00
let quantidadeproduto2 = 600

let = preçoporunidade1 = preçoproduto1 / quantidadeproduto1
let = preçoporunidade2 = preçoproduto2 / quantidadeproduto2

console.log ("preço por grama do produto 1 : " + quantidadeproduto1)
console.log ("preço por grama do produto 2 : " + quantidadeproduto2)

if (preçoporunidade1 < preçoporunidade2) {
    console.log ("produto 1 tem o melhor custo beneficio")
} else if (preçoporunidade1 + preçoporunidade2) {
    console.log ("produto 2 tem o melhor custo beneficio")
}else {
    console.log ("Ambos os produtos tem o memso custo beneficio")
}


// 17 Cálculo do Perímetro de um Retângulo

let lado1 = 2
let lado2 = 2
let lado3 = 2
let lado4 = 2
let perimetro = lado1+ lado2 + lado3 + lado4
console.log ("O perímetro do retângulo é " + perimetro)

//18 Calculo da tempo da viagem

let = "distância"
let = "velocidade"
let = "tempo"
distância = 1500
velocidade = 150
tempo = distância / velocidade
console.log (`O tempo estimado da viagem é de ${150} km/h, com uma distância de ${distância} km. O tempo da viagem será de ${tempo} horas`)

// 20 Declaração de notas com conceitos

let = "nota"

nota = 2

if (nota<2)
    console.log ("Você ficou com a nota F")

else if (nota <4)
    console.log ("Você ficou com a nota E")

else if (nota <6)
    console.log ("Você ficou com a nota D")

else if (nota <8)
    console.log ("Você ficou com a nota C")

else if (nota <9)
    console.log ("Você ficou com a nota B")

else console.log ("Você ficou com a nota A")



// 21 calculo de fatorial

let numero = 6
let fatorial = 1
fatorial *= numero

fatorial *= numero - 1
fatorial *= numero - 2
fatorial *= numero - 3
fatorial *= numero - 4

console.log (`o fatorial de ${numero} é ${fatorial}`)

//22 Separação de numeros pares e impares

let numerosParesEimpares = 9
let verificação; 

verificação = numerosParesEimpares % 2

if (verificação % 2 ==0) {
    console.log(`Esse numero é par ${verificação}`);
    
} else {
    console.log(`Esse é impar ${verificação}`);
    
}

// 23 somar todos os digitos de um numero

let NumeroInteiro = '2, 0, 0, 0, 9'
let somaa = 2 + 0 + 0 + 0 + 9
console.log (`A soma dos digitos desse numero é " ${somaa}`)


// 25 soma da média ponderada

let notaa = 4
let notaaa = 10
let peso = 7
let pesoo = 4
let media1 = ( notaa * peso)
let media2 = (notaaa * pesoo)
let somaDasmedias = media1 + media2
let ponderada = somaDasmedias / 2
console.log(` A soma da média ponterada é ${somaDasmedias}`);

// 26 calculo das horas trabalhadas

let horarioDeentrada = 7.30
let horarioDesaida = 16.30
let horasTrabalhadas = ( horarioDesaida-horarioDeentrada)
console.log(`O total de horas trabalhadas é de ${horasTrabalhadas} horas`);


// 27 Divisão de conta de restaurante

let valorTotal = 200
let qunatidadeDepessoas = 2
let contaDividida = (valorTotal / qunatidadeDepessoas)
console.log (`O valor da conta dividida igualmente será de R$ ${contaDividida}`)


// 28 conversao de uma moeda para outra

let dolar = 5.77
let real = 100
let conversão = ( real / dolar)
console.log(`R$ ${real} equivale convertendo para dolar exatamente   ${conversão}`);








    













//1 Switch case

let numero = 15;
let numeroo = 2;
let operação = "//";
let resultado = numero * numeroo;
let resultado2 = numero + numeroo;
let resultado3 = numero - numeroo;
let resultado4 = numero / numeroo;

switch (operação) {
  case "*":
    console.log(`${numero} * ${numeroo} = ${resultado}`);

    break;
  case "+":
    console.log(`${numero} + ${numeroo} = ${resultado2}`);

    break;
  case "-":
    console.log(`${numero} - ${numeroo} = ${resultado3}`);

    break;

  case "/":
    console.log(`${numero} /  ${numeroo} = ${resultado4}`);

    break;
  case "/":
    if (numeroo !== 0) {
      resultado = numero / numeroo;
    } else {
      resultado = "Erro: divisao por zero";
    }
    break;
  default:
    console.log(`Opçao invalida`);
    break;
}

// If

//2

let numer0 = 12;

if (numer0 < 0) {
  console.log(`Seu numero é negativo`);
}
if (numer0 > 0) {
  console.log(`Seu numero é positivo`);
}
if ((numer0 = 0)) {
  console.log(`Seu numero é zero`);
}

//3

let idade = 15;

if (idade >= 16) {
  console.log(`Voce pode votar, pois tem a idade apropriada  ${idade} anos`);
} else console.log(`voce tem menos que 16 anos, voce nao pode votar`);

// 4

let number1 = 120;
let nUmber2 = 2;

if (number1 > 10 && nUmber2 > 10) {
  console.log(`se "a" for maior que 10 e "b" maior que 10 `);
} else {
  console.log(`um dos numeros maiores é menor que 10`);
}
if (number1 < 5 || nUmber2 < 5) {
  console.log(`um dos numeros é menor que 5`);
} else {
  console.log(`Um é maior que 10 e o outro e menor que 5`);
}

// for

//5

for (let i = 1; i <= 10; i++) console.log(i);

//6

let soma = 0;
let i;
for (let i = 1; i < 5; i++) {
  soma += i;
}
console.log(`O valor da soma é ${soma}.`);

// 7
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}


//8

let numerooo = 8;

for (let i = 1; i <= 10; i++) {
    let resultado = numerooo * i;
    console.log(`${numerooo} x ${i} = ${resultado}`);
}



// 9

for (let i = 20; i >= 0; i -= 2) {
    console.log(i);
}


//while

// 10

let I = 1;

while (I <= 5) {
    console.log(I);
    I++;
}



// 11

let number = 1;
while (number <= 15) {
    if (number % 2 !== 0) {
        console.log(number);
    }
    number++;
}


//12

let numeros = [10, 50, 80, 99, 101]; 
let numer = 0;
let contagem = 0;

while (numer <= 100) {
  numer = numeros[contagem]; 
  contagem++;
  console.log(`Tentativa ${contagem}: número = ${numer}`);
}

console.log(`Número maior que 100 encontrado após ${contagem} tentativas.`);


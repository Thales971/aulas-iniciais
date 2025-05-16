// 1

let preco = 240;
let diaPromocao = true;
let cartaoFide = true;

let percentualDesconto = 0;
if (preco > 200) percentualDesconto += 10;
console.log("desconto de 10% a mais");
console.log(`${percentualDesconto}`);

if (diaPromocao) percentualDesconto += 15;
console.log("desconto de adicional de 15% a mais");
console.log(`${percentualDesconto}`);

if (cartaoFide) percentualDesconto += 5;
console.log("desconto de adicional de 5% a mais no cartão fidelidade");
console.log(`${percentualDesconto}`);

let valorDesconto = preco * (percentualDesconto / 100);
let valorFinal = preco - valorDesconto;
console.log(`valor original é R$${preco.toFixed(2)}`);

console.log(
  `total de desconto é ${percentualDesconto}% R$${valorDesconto.toFixed(2)}`
);
console.log(`Valor final:R$${valorFinal.toFixed(2)}`);

console.log("----------------------------------------");

// 2

let idade2 = 18;
let exameTeorico = true;
let examePratico = true;

if (idade2 >= 18)
  console.log(
    `pode fazer o exame teorico pois voce tem a idade ${idade2} anos`
  );
else
  console.log(
    `Voce nao pode fazer o exame teorico pois nao te a idade permitida`
  );

if (exameTeorico)
  console.log(`Voce passou no exame teorico agora realize o pratico`);
else console.log(`Voce tera que refazer o exame`);

if (examePratico)
  console.log(`Voce passou no exame pratico pegue sua carteira`);
else console.log(`Voce tera que refazer a prova`);

console.log(`------------------------------------------------------`);

// 3

let idade = 65;
let ehFeriado = true;
let temCartaoDeDesconto = true;

let = precoIngresso = 0;

if (idade <= 10) {
  precoIngresso = 20;
  console.log("Categoria: criança - preço base de : R$10");
} else if (idade > 60) {
  precoIngresso = 25;
  console.log("Categoria idoso - preço base de : R$25");
} else {
  precoIngresso = 40;
  console.log("Categoria adulto - preço base de R$40");
}

if (ehFeriado) {
  let = acrescimo = precoIngresso * 0.2;
  precoIngresso += acrescimo;
  console.log(`Acréscimo de 20% por ser feriado: )+R$ ${acrescimo.toFixed(2)}`);
}

if (temCartaoDeDesconto) {
  let desconto = precoIngresso * 0.15;
  precoIngresso -= desconto;
  console.log(`Desconto de 15% por ter cartao: -R$${desconto.toFixed(2)}`);
}

console.log(`Preço final do ingresso: R$${precoIngresso.toFixed(2)}`);

// 4

let idade3 = 12;
let classificaçao = 16;
let acomPanhadoDeresponsavel = false;
let ingresso3;

if (idade3 > 12) {
  classificaçao = livre;
  console.log(
    `Voce podera assistir o filme de classificaçao ${classificaçao} anos`
  );
} else if (idade3 < 16) {
  classificaçao = "12 anos";
  console.log(
    `Voce podera assistir o fime de classificaçao de ${classificaçao} anos`
  );
} else if (idade3 < 18) {
  classificaçao = `16 anos`;
  console.log(
    `Voce podera asssistir filmes de classificaçao de ${classificaçao} anos`
  );
} else classificaçao = 18;
console.log(
  `Voce podera assistir a todos os filmes que voce quiser, pois voce tem  ${classificaçao} anos`
);

if (acomPanhadoDeresponsavel) {
  console.log(`Voce pode entrar com sua familia`);
} else if (idade3 > 18) {
  console.log(`Voce pode entrar com seus pais`);
} else if (idade3 < 8) {
  console.log(`Voce nao podera entrar sem a presença de seus pais`);
} else {
  console.log(`voce pode ver o filme sem seus pais`);
}
if (ingresso3) {
  console.log(`Voce pode entrar voce tem ingresso`);
} else console.log(`Voce nao podera adentrar o cinema`);

// 5

let pontos = 100;
let dificuldade = 1;
let recorde = true;
let itens = true;
let all;
let alld;
let allr;
let alli;

if (dificuldade) {
  alld = dificuldade * pontos;
  console.log(`${pontos} . ${dificuldade} = ${alld}`);
}
if (recorde) {
  allr = alld * 2;
  console.log(`${alld} . 2 =  ${allr}`);
}
if (itens) {
  alli = allr + 150;
  console.log(`${allr} + 150 = ${alli} `);
}

all;
console.log(`Seus pontos totais foram = ${alli}`);

// 6

let temperatura = 20;
let formal = true;
let casual = false;
let festa = false;
let Cor = true;
let Estampa = true;

if (temperatura) {
  temperatura >= 25;
  console.log(
    `Se a temperatuta for maior ou igual a 25 utilize roupas leves na ocasiao`
  );
} else if (temperatura) {
  temperatura < 25;
  console.log(
    `Se a temperatura for menor que 25 utilize roupas um pouco mais pesadas como calças e roupas compridas`
  );
}
if (formal) {
  console.log(
    `Utilize roupas formais como ternos,vestidos e calças de alfaiataria`
  );
}
if (casual) {
  console.log(
    `Se a ocasiao for casual utilize roupas mais casuais como shorts,camisas de futebol,chinelo,etc`
  );
}
if (festa) {
  console.log(
    `Utilize roupas mais chamativas como camisas de marcas,tenis chamativos e estampas coloridas ou formais dependendo do tipo da festa`
  );
}
if (cor) {
}

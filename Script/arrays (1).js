// jogo exemplo
let nomes = ["zezinho", "Pedrinho", "valentina", "Enzo", "Claudinei"];
let gastosIndividuais = [25, 75, 30, 55, 45];
let gastoTotal = 0;
let valorMédiogasto = 0;

for (let i = 0; i < gastosIndividuais.length; i++) {
  gastoTotal += gastosIndividuais[i];
}
valorMédiogasto = gastoTotal / gastosIndividuais.length;

for (let i = 0; i < gastosIndividuais.length; i++) {
  const element = gastosIndividuais[i];
  if (gastosIndividuais[i] > valorMédiogasto) {
    console.log(
      `${nomes[i]} gastou R$${
        gastosIndividuais[i] - valorMédiogasto
      } mais que a média`
    );
  } else
    console.log(
      `${nomes[i]} gastou R$${
        valorMédiogasto - gastosIndividuais[i]
      } menos que a média`
    );
}

console.log(`gastos totais foram de: ${gastoTotal}`);

console.log(`gastos médios: ${valorMédiogasto}`);

console.log("------------------");

// Aplicativo de temperatura exemplo

let temperaturas = [28,31,27,29,30,32,33]
let tempmédia = 0
let tempmáxima = 0
let tempMímima = 0
let totall = 0
let dia = ["Segunda","Terça","Quarta","Quinta","sexta","sabado","Domingo"]
let d1a = 0
let www = 0

    

for (let i = 0; i < temperaturas.length; i++) {
    totall += temperaturas[i];
    
}
 tempmédia = totall/temperaturas.length

 for (let i = 0; i < temperaturas.length; i++) {
    
    if (temperaturas[i] > tempmáxima) {
        tempmáxima = temperaturas[i]
        www = dia[i]
    }
    
 } 
 for (let i = 0; i < temperaturas.length; i++) {
     
    if (temperaturas[i] < temperaturas[0]) {
        tempMímima = temperaturas[i]
        d1a = dia[i]
    }
    
 }

    
 

 console.log(`A temperatura média da semana é ${tempmédia}°`);
 console.log(`No ${www} ocorreu a temperatura maxima da semana de: ${tempmáxima}° `);
 console.log(`A temperatura mínima da semana, no ${d1a}: ${tempMímima}°`);



 // Atividade 
 
 
 

 

 
 


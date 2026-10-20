//console.log("") mostra uma informação no console
console.log("Olá, Mundo");
console.log("Estou com muito sono");
console.log("2" + "2")

console.log(typeof "Olá Mundo")// string
console.log(typeof 13) //number
console.log(typeof 10.5)//number
console.log(typeof true)//boolean
console.log(typeof false)//boolean


// váriavel
//const não pode ter seu valor alterado durante o programa
const nome = "Talita"
console.log(nome);
//let pode ter seu valor alterado durante o programa
let idade = 17;
console.log(idade);

console.log(`Olá ${nome}, que tem ${idade} anos.`);


idade = 18;
console.log(idade);

console.log("Olá " + nome + ", que tem " + idade + " anos ")
console.log(`Olá ${nome}, que tem ${idade} anos.`);


let nome1 = "Amanda"
console.log(nome1)

let peso = 60
console.log(peso)

console.log(`A menina ${nome1}, que pesa ${peso} kg.`);

nome1 = "Camila"
console.log(nome1)

peso = 61;
console.log(peso)

console.log(`A menina ${nome1}, que pesa ${peso} kg.`);

//Métodos de string

const texto = "OtorrinolarIngolOgista"

//conta quantos caracteres a string tem
console.log(texto.length)

//altera todas as letras para maíusculo
console.log(texto.toUpperCase())

//altera todas as letras para minúsculo
console.log(texto.toLowerCase())

const nome_completo = "Amanda Cristina Pimentel Ramos"
console.log(nome_completo.includes("Ramos")) //true

console.log(10 > 5)//true
console.log(10 < 5)//false
console.log(10 >= 10)//true
console.log(10 <= 5)//false
console.log("10" == 10)//true
console.log("10" === 10)//false
console.log(10 !== 5)//true

const idadePessoa = 17

console.log(idadePessoa >= 18)//false
console.log(idadePessoa >= 16)//true

let nome_completo1 = "Deise Santos Andrade"
console.log(nome_completo1 == "deise santos ramos")//false

nome_completo1 = "Kim Seokjin"
console.log(nome_completo !== nome_completo1)//true

//coletamos a idade da pessoa
let pessoaidade = 15;
// verificar se a idade é maior ou igual a 18
if (pessoaidade >= 18) {
    //se maior ou igual a 18 então ela é maior de idade
    console.log("Já pode ser preso HAHAHA")
}
//senão, então ela é menor de idade
else {
    console.log("Não vai pra balada")
}


//coletamos a idade da pessoa
let idadevotacao = 18;
// verificar se a idade da pessoa é maior que 70
if (idadevotacao > 70) { console.log("Você não é obrigado a votar") }
else if (idadevotacao >= 18) {
    //senão se a idade da pessoa for maior ou igual a 18
    console.log("Você tem que votar obrigatoriamente")
} else if (idadevotacao >= 16) {
    //senão se a idade da pessoa for maior ou igual a 16
    console.log("Você não é obrigado a votar, mas caso queira pode")
} else {
    //senão for nenhuma das alternativas anteriores
    console.log("Você NÃO PODE votar")
}



//ATIVIDADE 1
let nota = 10;
if (nota >= 7) { console.log("Você foi aprovado") }
else {
    console.log("Você não foi aprovado")
}

//ATIVIDADE 2
const numero = 1000
const numero2 = 2000
console.log(numero > numero2)
if (numero > numero2) {conso.log("numero é maior");}
else if (numero < numero2) { console.log("numero é menor"); }
else {console.log("Empate") }

//ATIVIDADE 3
let senha = "senai123"
if (senha == "senai123") {
    console.log("Acesso Autorizado")
} else { console.log("Senha Incorreta") }


//ATIVIDADE 4
// 04 — Classificação de temperatura
// Receba uma temperatura em graus Celsius e classifique-a:
// Abaixo de 18 °C: "Frio".
// De 18 °C até 27 °C: "Agradável". 
// Acima de 27 °C: "Quente".
let graus= 30
if (graus < 18) { 
    console.log("Frio") }
else if (graus<= 27) {
 console.log("Agradavél")
} else if (graus > 27) {
    console.log("Quente")
} 


//ATIVIDADE 5
let nota2 = 10
if(nota2 >= 9){console.log("Excelente")}
else if(nota2 >= 7 ){console.log("Bom")}
else if(nota2 < 5){console.log("Insuficiente")}

//ATIVIDADE 6
let semana= 10
if(semana == 1 ){console.log(Domingo)}
else if(semana == 2 ){console.log(Segunda)}
else if(semana == 3 ){console.log(Terça)}
else if(semana == 4 ){console.log(Quarta)}
else if(semana == 5 ){console.log(Quinta)}
else if(semana == 6 ){console.log(Sexta)}
else if(semana == 7 ){console.log(Sábado)}
else {console.log("Dia inválido")}


//&& = E
// || = OU

let idadeDirigir = 19;
let temCNH = true;
let temCarro = false;

if(idadeDirigir >= 18 && temCNH == true && temCarro == true){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
}
   
let ehProfessor = false
let ehAluno = false

if(ehProfessor == true || ehAluno == true){
    console.log("Você tem direito a meia-entrada")
}else{
    console.log("Você não tem direito a meia-entrada")
}

//ATIVIDADE 1
let number=5
if(number > 10 && number < 50){
    console.log ("O número está dentro do intervalo")
}else{
    console.log ("O número está fora do intervalo")
}

//ATIVIDADE 2
let old = 12
if(old > 15 && old < 23)
{console.log ("Você atende aos requisitos")}
else{
    console.log ("Você não atende aos requisitos")
}

//ATIVIDADE 3
let valorCompra= 100
let ehAssinante= false
if(valorCompra >= 200 || ehAssinante == true)
{console.log ("Você tem direito a frete grátis")}
else{console.log("Você não tem direito a frete grátis")}

//ATIVIDADE 4
let week="Terça"
if(week == "Sábado" || week == "Domingo"){
    console.log("Fim de semana")
}else{console.log("Dia Inválido")}

//ATIVIDADE 5
let valor= 300
let valorFinal= valor * 0.85
let temAssinatura = false
let temCupom=false
if(valor >= 150 && temAssinatura == true || temCupom == true){
    console.log(`O desconto será aplicado e o valor final é de ${valorFinal} reais`);
}else console.log(`O desconto não será aplicado e o valor final é de ${valor} reais`);























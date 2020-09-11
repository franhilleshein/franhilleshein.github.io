console.log("funademntos.js"); 

//Criação de variável
//Nome seguindo a regra lowerCamelCase
//const = constante
 
const aluguelMensal = 500;
const aluguelAnual = 12 * aluguelMensal;
 
//Para mostrar no console deve concatenar
//a frase que é uma string com a constante
console.log('Aluguel Anual = ' + aluguelAnual);

let primeiroNome = "Franciele";
const segundoNome = "Hilleshein";

//primeiroNome = "Gabriel";
//segundoNome = "Souza";

const idade = 16;
const altura = 1.73;
const peso =  55;

//Concatenação de strings e números comm variáveis
let frase = "Meu nome é " + primeiroNome + " " + segundoNome + 
", e tenho " + idade + " anos, minha altura é de " + 
altura + "m, e peso " + peso + "kg. Esta sou eu!";

console.log(frase);
//Uso de Template String para escrever uma frase
//ao invés de aspas, usa-se a crase.
const frase2 = `Meu nome é ${primeiroNome} ${segundoNome}, \
tenho ${idade} anos, minha altura é de ${altura}m, e peso \
${peso}kg. Esta sou!`;
 
console.log(frase2);

//Variável do tipo booleano (boolean)
//São variáveis que recebem verdadeiro (true) ou falso (false)
const ceuEhAzul = true; //verdadeiro
console.log('Tipo da variável Céu é azul: ' + typeof(ceuEhAzul));
 
//Uso em controle de fluxo com IF - ELSE
if (ceuEhAzul) {
   console.log("O céu é azul.");
} else {
   console.log("Eu pensava que o céu fosse azul.");
}

//Controle de fluxo usando comparação
if (1 + 1 === 2) {
    console.log("1 + 1 nem sempre é 2!");
    console.log(typeof(1+1===2));//tipo boolean
 } else {
    console.log("Impossível!");
 }
  
 //Controle de fluxo composto else if
 let amigosNoCinema = 10;
 if(amigosNoCinema === 0) {
    console.log("Vai sobrar mais pipoca!");
 } else if (amigosNoCinema < 10 ){
    //Senão se
    console.log("Vai dar para ver o filme sussa!");
 } else {
    console.log("A gente veio aqui para fazer festa!");
 }
 
 //Repetição de uma instrução
amigosNoCinema = 0;
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 1
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 2
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 3
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 4
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 5
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 6
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 7
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 8
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 9
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 10
amigosNoCinema = amigosNoCinema + 1;// Incremento de 1 = 11
console.log(`Amigos no cinema: ${amigosNoCinema}`);
 
//Repetição usando laço ou loop
amigosNoCinema = 0;
while (amigosNoCinema < 10) {
   //Repetir enquanto amigosNoCinema < 10
   amigosNoCinema += 1; //Incremento de 1
}
console.log(`[while] Amigos no cinema: ${amigosNoCinema}`);
 
amigosNoCinema = 0;
for (let i = 0; i < 10; i++) {
   amigosNoCinema++; //Incremento de 1
}
console.log(`[for] Amigos no cinema: ${amigosNoCinema}`);

//Função
function adicionarDois(numero) {
    //Esta função retorna o parâmetro 'numero'
    //adicionado o 2
    return numero + 2;
 }
  
 const respostaFinal = adicionarDois(8);
 console.log(`Resposta final = ${respostaFinal}`);

 function digaOlah(primeiroNome, segundoNome, titulo, saudacao) {
    return `${primeiroNome} ${segundoNome}, ${titulo}, ${saudacao}`;
 }
  
 console.log(digaOlah('Fran','Hill','aluna','Alo Ha!'));
 console.log(digaOlah('Jack','Sparrow','capitão','Warrrr'));

 //Visbilidade e escopo
//O escopo da função é o que aparece entre as Chaves
function adicionarCinco(numero) {
    //Variável criada dentro da função
    //não pode ser vista fora dela
    const total = numero + 5;
    return total;
 }
  
 //adicionarCinco(25);
 //console.log("O valor total é: " + total);
 console.log("O valor total é: " + adicionarCinco(25));

 //Objeto e suas propriedades
const pessoa = {
    primeiroNome: 'Franciele',
    segundoNome: 'Hilleshein',
    peso: 55,
    altura: 1.73,
    idade: 16
 };
  
 console.log(pessoa);
  
 const frase3 = `${pessoa.primeiroNome} ${pessoa.segundoNome}, tem \
                ${pessoa.idade} anos, pesa ${pessoa.peso} kg e \
                mede ${pessoa.altura} m de altura.`;
console.log(frase);

 //Objeto com função
const pessoa2 = {
    primeiroNome: 'Franciele',
    segundoNome: 'Hilleshein',
    peso: 55,
    altura: 1.73,
    idade: 16,
    imc() {//Método que calcula o Índice de massa corporal
        //Peso e altura é deste objeto, usa-se o this
        const valor = this.peso/(this.altura*this.altura);
        return valor;
    }
 };
  
 console.log(pessoa2.primeiroNome + " tem imc = " + pessoa2.imc());
 //Emagrecendo a Fran
 pessoa2.peso = 50;
 console.log("Emagrecimento da Fran! Peso: " + pessoa2.peso);
 console.log(pessoa2.primeiroNome + " tem imc = " + pessoa2.imc());

 //Objeto de Objetos - Notação Json
const pessoa3 = {
    nome: {
        primeiro: "Franciele",
        segundo: 'Hilleshein'
    },
    endereco: {
        rua: 'dos bobos',
        numero: '0',
        cidade: 'Brusxqui'
    }
 }
  
 console.log(`${pessoa3.nome.primeiro} ${pessoa3.nome.segundo} mora \
 na Rua ${pessoa3.endereco.rua} número \
 ${pessoa3.endereco.numero} na cidade de \
 ${pessoa3.endereco.cidade}`);

 //Arrays com colchetes
 
const diaDaSemana = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
 ];
  
 console.log(diaDaSemana);
 console.log(diaDaSemana[0]);//Domingo
 console.log(diaDaSemana[6]);//Sábado
  
 for(let i=0; i<7; i++)
    console.log(`O dia de hoje é ${diaDaSemana[i]}`);
 
//Array de Objetos
const cursos = [
    {professor: 'Tarcísio', UCr: 'LWEB'},
    {professor: 'Rodrigo O.', UCr: 'CMBD'},
    {professor: 'Rozana', UCr: 'Inglês'}
 ];
  
 for(let i=0; i<cursos.length; i++)
    console.log(`Nome ${cursos[i].professor} - UCr: ${cursos[i].UCr}`)

    
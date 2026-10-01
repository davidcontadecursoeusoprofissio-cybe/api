//const readline = require('readline-sync')

//let idade = ''
//let nome = ''
//let email= ''

//idade = readline.question('Qual sua idade?')

//nome = readline.question('Qual seu nome?')

//email = readline.question('por favor, digite seu email:')

//if(idade>=18)
//{
    //console.log("Parabens , você tem acesso",nome)
    //console.log("Seu email:",email)
//}
//else
//{
    //console.log("Você não passou", nome)
    //console.log("Falta pouco para 18:",18-idade)
//}
//===================================================
const readline = require('readline-sync')
let quantidade = ''
let valor = ''
let nome = ''

quantidade = readline.question('Digite a quantidade:')
valor = readline.question('Digite o valor:')
nome = readline.question('Digite o nome:')
if(quantidade<=20)
{
    console.log("Essa quantidade de produtos tera desconto:",valor-50)
    console.log(nome)
}
else
{
    console.log("Esse produto não recebera desconto")

}
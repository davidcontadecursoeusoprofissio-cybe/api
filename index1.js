const readline = require('readline-sync')

let idade = ''
let nome = ''
let email= ''

idade = readline.question('Qual sua idade?')

nome = readline.question('Qual seu nome?')

email = readline.question('por favor, digite seu email:')

if(idade>=18)
{
    console.log("Parabens , você tem acesso",nome)
    console.log("Seu email:",email)
}
else
{
    console.log("Você não passou", nome)
    console.log("Falta pouco para 18:",18-idade)
}
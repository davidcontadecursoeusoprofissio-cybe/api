const readline = require('readline-sync')

let nome = ''
let resposta = ''
let resposta1 = ''
let resposta2 = ''

let nomeCerto ='Hiago'
nome = readline.question("Digite o nome:")


resposta1 =readline.question("ola?")
resposta = readline.question("Bem, e voce?.Como vai amigo?")

if(nome==nomeCerto)
{
    console.log("É você!")
}
else
{
    console.log(resposta1)
    console.log("bom te conhecer")
    console.log(resposta)
}
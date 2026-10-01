//const readline = require('readline-sync')
//let senha = ''
//let senhaCorreta = "senha"
//senha = readline.question('Digite sua senha')

//if(senha==senhaCorreta)
//{
    //console.log("Você acessou")
//}
//else
//{
    //console.log("Senha incorreta tenta novamente")
//}
//=========================================================
const readline = require('readline-sync')
let nome = ''
let nomeCerto = "Hiago"
nome = readline.question('Digite seu nome:')
if(nome==nomeCerto)
{
    console.log("É você, como vai?")
}
else
{
    console.log("Não é você!")
}
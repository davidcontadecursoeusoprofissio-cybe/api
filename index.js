const readline = require('readline-sync')
let senha = ''
let senhaCorreta = "senha"
senha = readline.question('Digite sua senha')

if(senha==senhaCorreta)
{
    console.log("Você acessou")
}
else
{
    console.log("Senha incorreta tenta novamente")
}
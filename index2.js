const readline = require('readline-sync')

let nome ='David'
let senha=''
let email ='davidalarcon@gmail.com'

let senhacorreta ="2649"
senha = readline.question('Digite a senha:')

if(senha == senhacorreta)
{
    console.log("parabens, você acessou",nome)
    console.log(email)
}
else
{
    console.log("Você não pode acessar")
}
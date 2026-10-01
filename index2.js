//const readline = require('readline-sync')

//let nome ='David'
//let senha=''
//let email ='davidalarcon@gmail.com'

//let senhacorreta ="2649"
//enha = readline.question('Digite a senha:')

//if(senha == senhacorreta)
//{
    //console.log("parabens, você acessou",nome)
    //console.log(email)
//}
//else
//{
    //console.log("Você não pode acessar")
//}
//=============================================
const readline = require('readline-sync')
let email ='davidalarcon@gmail.com'
let pagamento =''

let ValorCerto =300
pagamento = readline.question('Valor a ser pago:')
if(pagamento>=ValorCerto )
{
    console.log("tudo certo, valor do seu troco:",pagamento-ValorCerto) 
    console.log(email)   
}
else
{
    console.log("você não realizou o pagamento correto, falta:",ValorCerto-pagamento)
    console.log("Você tem divida:",email)
}
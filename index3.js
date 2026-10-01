//*const readline = require('readline-sync')

//let nome = ''
//let resposta = ''
//let resposta1 = ''
//let resposta2 = ''

//let nomeCerto ='Hiago'
//nome = readline.question("Digite o nome:")


//resposta1 =readline.question("ola?")
//resposta = readline.question("Bem, e voce?.Como vai amigo?")

//if(nome==nomeCerto)
//{
    //console.log("É você!")
//}
//else
//{
    //console.log(resposta1)
    //console.log("bom te conhecer")
    //console.log(resposta)
//}
//======================================================================

const readline = require('readline-sync')
let valor = ''
let nome = 'Pessoa'

let ValorDesconto = 200
valor = readline.question("Valor pago:")

if(valor >= ValorDesconto)
{
    console.log("Voce recebera um desconto:",valor-100)
    console.log(nome)
}
else
{
    console.log("Compra realizada")
}
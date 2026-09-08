//let url = "https://jsonplaceholder.typicode.com/users"
//api de lista, não de objeto  
//let resposta = fetch(url)

//.then(resposta => resposta.json())
//só email que da dentro api:  .then(dados => dados.map((post) => {console.log(post.email)}))
//tudo:  .then(dados => {console.log("dados", dados)})

 
//////////////////////////////////////////////////////////////////////////////////////////



let url = "viacep.com.br/ws/08490490/json/"
//api de objetos, não de lista e 01001000 é o cep
let resposta = fetch(`https://${url}`)
.then(resposta => resposta.json())
//.then(dados => [dados].map((post)=> {console.log(post.logradouro)}))
.then(dados => [dados].map((post)=> {console.log(post)}))


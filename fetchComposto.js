function Rua() {
    let endereco = document.getElementById("cep").value
    let url = `https://viacep.com.br/ws/${endereco}/json/`

    let ResultadoURL = fetch(url)

    .then(ResultadoURL => ResultadoURL.json())
    .then(dadosURL =>{document.getElementById("resultado").textContent = dadosURL.logradouro})
}
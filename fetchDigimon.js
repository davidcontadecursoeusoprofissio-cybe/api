function Digimon() {
    let digimon = document.getElementById("Campo").value.toLocaleLowerCase()
    let url = `https://digi-api.com/api/v1/digimon/${digimon}`

    let Respostadigimon = fetch(url)
    .then(Respostadigimon => Respostadigimon.json())
    .then(dados => {
        document.getElementById("resposta").textContent += `${dados.name} - ${dados.fields[2].field} - ${dados.skills[4].skill}`;

        document.getElementById("imagem").src = dados.images[0].href;
    })
}

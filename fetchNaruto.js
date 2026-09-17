function Naruto(){
let personagens = document.getElementById("Campo").value
let url = `https://dattebayo-api.onrender.com/characters/`


    fetch(url)
    .then(naruto => naruto.json())
    .then(dadosNaruto =>{
        document.getElementById("resultaNaruto").textContent += `${dadosNaruto.characters[0].id}-${dadosNaruto.characters[0].name}-${dadosNaruto.characters[0].debut[1].manga}-${dadosNaruto.characters[0].family[2]}-${dadosNaruto.characters[0].jutsu[3]}`;
        document.getElementById("imagem").src = dadosNaruto.characters[0].images[0];
    })
}

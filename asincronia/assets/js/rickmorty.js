const API_BASE = "https://rickandmortyapi.com/api"

//con esto guardamos los datos en la memoria local
let datosLocales = null

const getCharacters = async () => {
    // con los datos locales no necesitamos hacer fetch
    if (datosLocales !== null) {
        return datosLocales
    }

    const ENDPOINT = "/character/1,2,3,4,5,6,7,8,9,10"
    const result = await fetch(API_BASE + ENDPOINT)
    const data = await result.json()

    // Guardamos los datos antes de retornarlos
    datosLocales = data
    return data
}

const showCharacters = async () => {
    const characters = await getCharacters()
    const charactersElement = document.getElementById("characters")

       charactersElement.innerHTML = ""

    characters.forEach(character => {
        charactersElement.innerHTML += `
        <div class="col">
            <div class="card">
                <img src="${character.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">${character.species}</p>
                    <button class="btn btn-primary" onclick="showSingleCard(${character.id})">Ver Ficha</button>
                </div>
            </div>
        </div>
        `
    })
}

const groupedCharacters = async () => {
    const characters = await getCharacters()
    const speciesGroupElement = document.getElementById("species-group")

       const group = Object.groupBy(characters, ({ species }) => species)

     speciesGroupElement.innerHTML = ""

      let listaHTML = "<ol>"
    for (const speciesName in group) {
        listaHTML += `<li><strong>${speciesName}</strong>`
        listaHTML += "<ul>"
        
        // Ponemos los personajes de esa especie
        group[speciesName].forEach(char => {
            listaHTML += `<li>${char.name} (ID: ${char.id})</li>`
        })
        
        listaHTML += "</ul></li>"
    }
    listaHTML += "</ol>"

      speciesGroupElement.innerHTML = listaHTML
}

const showSingleCard = async (id) => {
    const characters = await getCharacters()
    const singleCardElement = document.getElementById("single-card")

    // Buscamos al personaje por su ID
    const character = characters.find(char => char.id === id)

    if (character) {
        singleCardElement.innerHTML = `
        <div class="card border-primary">
            <div class="card-header bg-primary text-white">Ficha de Personaje</div>
            <img src="${character.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">ID: ${character.id}</p>
                <p class="card-text">Especie: ${character.species}</p>
            </div>
        </div>
        `
    }
}


const btnCharacters = document.getElementById("btn-characters")
btnCharacters.addEventListener("click", () => {
    showCharacters()
})

const btnGrouped = document.getElementById("btn-grouped")
btnGrouped.addEventListener("click", () => {
    groupedCharacters()
})
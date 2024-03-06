const container = document.querySelector('.characters')

axios.get('https://api.disneyapi.dev/character')
.then(res => res.data)
.then(res => displayCharacters(res))
.catch( e => console.error(e))

function displayCharacters(characters) {
    for (let i = 0; i < 20; i++) {
        const name = characters.data[i].name
        const image = characters.data[i].imageUrl
        const film = characters.data[i].film

        const html = `
        <h1>${name}</h1>
        <img src="${image}"></img>
        <p>${film}</p>`

        const card = document.createElement('div')
        card.classList.add('.card')
        card.innerHTML = html
        container.appendChild(card)
    }

}

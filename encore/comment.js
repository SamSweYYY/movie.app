const div = document.querySelector('.comments')

fetch('https://jsonplaceholder.typicode.com/comments', {

    method: 'GET',
    headers: {
        "Accept" : "application/json",
        "Content-type" : "application/json"
    }
})

    .then(res => res.json())
    .then(res => displayComments(res))
    .catch(e =>console.log(e))

    function displayComments(data) {
        for (let i = 0; i<10; i++) {
            const id = data[i].id
            const title = data[i].name
            const email = data[i].email
            const body = data[i].body

            
        // On crée le html pour un commentaire
        const html = `
            <h1>${id} : ${title}</h1>
            <h2>${email}</h2>
            <p>${body}</p>
        `
            
            const comment = document.createElement('div')

            comment.innerHTML = html

            div.appendChild(comment)

        }
    }
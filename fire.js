const nombre = document.getElementById('name')
const email = document.getElementById('email')
const comentario = document.getElementById('message')
const form = document.getElementById('form')

const database = firebase.database()



send.addEventListener('click', (e) => {
    e.preventDefault()
    database.ref('/id'+ Math.floor((Math.random() * 10) + 1)).set({
        nombre: nombre.value,
        email: email.value,
        comentario: comentario.value 

    })
    form.reset()
 
})
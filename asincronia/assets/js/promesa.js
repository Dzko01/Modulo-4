function prepararCafé() {
const promesa = new Promise((resolve, reject) => {
console.log('Se está preparando el café...')

setTimeout(() => {
resolve('¡Café listo para tomar!')
}, 2000)
})

return promesa
}

function rutinaMañana() {
console.log('Me despierto')
console.log('Bajo las escaleras')
console.log('Prendo la maquina de café')

prepararCafé().then((valor) => {
console.log(valor)
console.log('Terminé de hacer todo')
})


}

rutinaMañana()
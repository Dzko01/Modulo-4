// OBJETOS
const mascota = {
    nombre: "Caco",
    tipo: "Gato",
    energia: 90,
    saciedad: 90,
    estaVivo: true,
    aliases: ["Cacricio", "Cacuito"],
    outfit: {
        accesorio: "Lentes opticos",
        cuerpo: "Hodie negro",
        pies: "zapatos nike"
    },
    comer: function () {

        if (!this.estaVivo) {
            console.log(`Oye oye... ${this.nombre} ya está muerto... no le puedes dar comida.`)
            return
        }

        this.energia += 60
        this.saciedad += 20

        if (this.energia > 100) {
            this.energia = 100
        }

        if (this.saciedad > 100) {
            // límite
            this.saciedad = 100
            console.log(`${this.nombre} ya no puede comer más... se puso a llorar :(`)
            return
        }

        this.estado()

    },
    jugar: function () {
        if (!this.estaVivo) {
            this.saciedad = 0
            this.energia = 0
            console.log(`${this.nombre} no puede jugar... está muerto. POR TU CULPA!`)
            return // early return
        }

        this.energia -= 30
        this.saciedad -= 20

        if (this.saciedad <= 0) {
            this.saciedad = 0
            this.morir()
            return
        }

        if (this.energia < 0) {
            this.energia = 0
            console.log(`${this.nombre} no tiene energía suficiente :c`)
        }

        this.estado()
    },
    morir: function () {
        this.estaVivo = false
        console.log(`${this.nombre}, acaba de morir... a llorar :c`)
    },
    estado: function () {
        console.log(`${this.nombre} tiene ahora ${this.saciedad} puntos de saciedad y ${this.energia} puntos de energia`)
    }
}

const comidas = [
    {
        nombre: "Pollo",
        stock: 2,
        recupera: {
            saciedad: 20,
            energia: 10
        }
    },
    {
        nombre: "Queque mágico",
        stock: 1,
        recupera: {
            saciedad: 80,
            energia: 80
        }
    }
]

// UI - User Interface
function actualizarUI() {
    const mascotaNombre = document.getElementById(`mascota-nombre`)
    const mascotaTipo = document.getElementById(`mascota-tipo`)
    const mascotaImg = document.getElementById(`mascota-img`)
    const mascotaEnergia = document.getElementById(`mascota-energia`)
    const mascotaSaciedad = document.getElementById(`mascota-saciedad`)


    mascotaNombre.textContent = mascota.nombre
    mascotaTipo.textContent = mascota.tipo
    mascotaEnergia.style.width = `${mascota.energia}%`
    mascotaEnergia.textContent = `Energia: ${mascota.energia}%`
    mascotaSaciedad.style.width = `${mascota.saciedad}%`
    mascotaSaciedad.textContent = `Saciedad: ${mascota.saciedad}%`

    if (!mascota.estaVivo) {
        btnComer.disabled = true
        btnJugar.disabled = true
        btnComer.style.opacity = "0.4"
        btnJugar.style.opacity = "0.4"
    }

    setTimeout(() => {
        const mascotaImg = document.getElementById(`mascota-img`)
        if (!mascota.estaVivo) {
            mascotaImg.src = "./assets/img/dead.gif"
        } else {
            mascotaImg.src = "./assets/img/Standby.gif"
        }
    }, 1000)

}
actualizarUI()

const btnComer = document.getElementById(`btn-comer`)
const btnJugar = document.getElementById(`btn-jugar`)

btnComer.addEventListener(`click`, () => {
    const mascotaImg = document.getElementById(`mascota-img`)
    mascota.comer()
    mascotaImg.src = "./assets/img/eating.gif"
    actualizarUI()
})
btnJugar.addEventListener(`click`, () => {
    const mascotaImg = document.getElementById(`mascota-img`)
    mascota.jugar()
    mascotaImg.src = "./assets/img/play.gif"
    actualizarUI()
})

actualizarUI()

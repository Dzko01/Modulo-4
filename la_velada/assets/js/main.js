// Creacion de los Pjs
const champ1 = new Champions("Pancho", 20, 0.1, 1.5, 10000)
const champ2 = new Champions("Huachimingo", 21, 0.2, 1.6, 9000)

// Captura de los elementos desde el HTML con los "id"
const nombre1 = document.getElementById("nombre1");
const vida1 = document.getElementById("vida1");
const btn1 = document.getElementById("btn1")
const card1 = document.getElementById("card1")

const nombre2 = document.getElementById("nombre2");
const vida2 = document.getElementById("vida2");
const btn2 = document.getElementById("btn2")
const card2 = document.getElementById("card2")

const log = document.getElementById("log")


// Función para actualizar la pantalla después de cada turno y utilizar el css de derrota
function actualizar() {
    // Actualizar valores de vida en pantalla
    vida1.textContent = champ1.hp;
    vida2.textContent = champ2.hp;

    if (!champ1.isAlive) {
        card1.classList.add("derrotado");
        btn1.disabled = true;
    }

    if (!champ2.isAlive) {
        card2.classList.add("derrotado");
        btn2.disabled = true;
    }
}

// Pancho ataca a Huachimingo
btn1.addEventListener("click", () => {
    const resultado = champ1.attack(champ2);
    actualizar();

    // Si el ataque devuelve false, es porque alguien ya murio
    if (resultado === false) {
        log.innerHTML += "<br>🛑 <b>LA PELEA SE TERMINO!</b>";
        return; // Esto detiene la función para que no lance un error
    }

    // Corregimos el orden de los nombres y agregamos <br>
    let mensaje = `<br><strong>⚔️ ${champ1.name}</strong> atacó a ${champ2.name} haciendo ${resultado.finalDamage} de daño.`;
    
    // Si fue critico, se avisa en pantalla
    if (resultado.isCritical) {
        mensaje += " <b>GOLPE CRITICO!</b>";
    }

    log.innerHTML += mensaje;
});

// boton de Huachimingo que ataca a Pancho
btn2.addEventListener("click", () => {
    const resultado = champ2.attack(champ1);
    actualizar();

    if (resultado === false) {
        log.innerHTML += "<br>🛑 <b>LA PELEA SE TERMINO!</b>";
        return;
    }

    let mensaje = `<br><strong>⚔️ ${champ2.name}</strong> ataco a ${champ1.name} haciendo ${resultado.finalDamage} de daño.`;
    
    if (resultado.isCritical) {
        mensaje += " <b>GOLPE CRITICO!</b>";
    }

    log.innerHTML += mensaje;
});

// Iniciar el juego con los datos de los campeones
function iniciarJuego() {
    nombre1.textContent = champ1.name;
    vida1.textContent = champ1.hp;

    nombre2.textContent = champ2.name;
    vida2.textContent = champ2.hp;

    log.innerHTML = "<b>LA PELEA HA COMENZADO;</b>";
}

// Arrancar el juego 
iniciarJuego();
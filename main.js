function actualizarDOM() {
    document.getElementById('vida1').innerText = champ1.hp;
    document.getElementById('vida2').innerText = champ2.hp;

    if (!champ1.isAlive) {
        document.getElementById('card1').classList.add('derrotado');
        document.getElementById('btn1').disabled = true;
    }
    if (!champ2.isAlive) {
        document.getElementById('card2').classList.add('derrotado');
        document.getElementById('btn2').disabled = true;
    }
}

function registrarLog(mensaje) {
    const logDiv = document.getElementById('log');
    logDiv.innerHTML += `<p>${mensaje}</p>`;
    logDiv.scrollTop = logDiv.scrollHeight; // Auto-scroll
}

function ejecutarTurno(atacante, defensor) {
    const resultado = atacante.attack(defensor);
    
    if (!resultado) return; // Si alguien ya está muerto, no hace nada

    let mensaje = `<strong>${atacante.name}</strong> ataca a ${defensor.name} causando ${resultado.finalDamage} de daño.`;
    if (resultado.isCritical) mensaje += " <em>¡Golpe Crítico!</em>";
    
    registrarLog(mensaje);

    if (!defensor.isAlive) {
        registrarLog(`💀 <strong>¡${defensor.name} ha sido derrotado!</strong>`);
    }

    actualizarDOM();
}

actualizarDOM()

document.getElementById('btn1').addEventListener("click", () => {
    ejecutarTurno(champ1, champ2)
});

document.getElementById('btn2').addEventListener("click", () => {
    ejecutarTurno(champ2, champ1)
});
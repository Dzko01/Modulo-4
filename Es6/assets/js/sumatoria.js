class Sumatoria {
    constructor(numeroBase) {
        this.numeroBase = numeroBase;
        this.acumulado = numeroBase;
        this.imprimirSalida(`[Constructor] Instancia creada. Número base: ${this.numeroBase}`);
    }

    sumar() {
        this.acumulado += this.numeroBase;
        this.imprimirSalida(`[sumar()] Nuevo valor acumulado: ${this.acumulado}`);
    }

    // Método auxiliar para pintar en el HTML en lugar de solo usar console.log
    imprimirSalida(mensaje) {
        const divSalida = document.getElementById('consola-salida');
        divSalida.innerHTML += `<p>> ${mensaje}</p>`;
        console.log(mensaje);
    }
}

// Generar número aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Crear objeto
const miSuma = new Sumatoria(numeroAleatorio);

/**
 * ⚠️ FALLO INTENCIONAL: Pérdida del contexto 'this'.
 * Al pasar miSuma.sumar como referencia, 'this' dentro del método apuntará al botón, 
 * no a la instancia de la clase, resultando en un acumulado "NaN".
 * Solución esperada: usar un arrow function () => miSuma.sumar() o .bind()
 */
document.getElementById('btnSumar').addEventListener('click', miSuma.sumar.bind(miSuma));
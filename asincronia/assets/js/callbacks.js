function procesarEntradaUsuario(funcionCallback) {
    const edadUsuario = prompt('Porfavor, ingresa tu edad')
    funcionCallback(edadUsuario)
}

function foo() {
    console.log('Soy una funcion callback')
}

function imprimirEdad(edad) {
    console.log(`el usuario tiene ${edad} años`)
}

function filtrarAcceso(edad) {
    if (edad >= 18) {
        console.log('puedes pasar')
        return
    }

    console.log('No puedes pasar')
}

// procesarEntradaUsuario(foo)

const mascotas = ['Agustin', 'Eduardo', 'Isabella', 'Popa', 'Titan']


const saludoMascotas = mascotas.map(function(mascota, indice, arreglo){
    return `hola ${mascota} ${indice}`
})

console.log(saludoMascotas)

// EJERCICIO 1: !isNaN
function validar_numero(callback_correcto, callback_error) {
    const dato = prompt('ingresa un número')
    
    if (dato !== "" && !isNaN(dato)) {
        callback_correcto(dato)
    } else {
        callback_error()
    }
}

// boton para activar el Ejercicio 1
document.getElementById("btn-ejercicio1").addEventListener("click", function() {
    validar_numero(function(mensaje) {
               console.log(mensaje) 
    })
})


// EJERCICIO 2: setTimeout
function calcular_y_avisar_despues(numero, callback) {
    let sumatoriaImpares = 0
    let limite = Number(numero)

    // Un bucle for simple para sumar impares
    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) {
            sumatoriaImpares += i
        }
    }

    // Tu callback pero metido dentro del temporizador de 5 segundos
    setTimeout(function() {
        callback(sumatoriaImpares)
    }, 5000)
}

// Botón para activar tu Ejercicio 2
document.getElementById("btn-ejercicio2").addEventListener("click", function() {
    const numeroInput = prompt('Ingresa un número para sumar impares:')
    
    calcular_y_avisar_despues(numeroInput, function(resultado) {
        alert(`El valor de la sumatoria es ${resultado}. Este resultado se obtuvo hace 5 segundos.`)
        console.log(`Resultado impares: ${resultado}`)
    })
})

// ====================================================================
// EJERCICIO 3: Sumatorias sucesivas dependientes
// ====================================================================
function calcular_y_avisar_dependiendo(numero, callback, callback_error) {
    let resultadoTotal = 0
    let limite = Number(numero)

    // Bucles para las sumas sucesivas (como el 1 + 2 + 3... de tus apuntes)
    for (let i = 1; i <= limite; i++) {
        for (let j = 1; j <= i; j++) {
            resultadoTotal += j
        }
    }

    // Estructura IF/ELSE idéntica a tu función 'filtrarAcceso'
    if (resultadoTotal < 1000) {
        callback(resultadoTotal)
    } else {
        callback_error(resultadoTotal)
    }
}

// Botón para activar tu Ejercicio 3
document.getElementById("btn-ejercicio3").addEventListener("click", function() {
    const numeroInput = prompt('Ingresa un número para sumas sucesivas:')
    
    calcular_y_avisar_dependiendo(
        numeroInput,
        function(resultado) {
            alert(`Las sumatorias sucesivas de número es ${resultado}`)
            console.log(`Menor a 1000: ${resultado}`)
        },
        function(resultado) {
            alert(`El número sobrepasa el objetivo de la función. Resultado: ${resultado}`)
            console.log(`Mayor o igual a 1000: ${resultado}`)
        }
    )
})
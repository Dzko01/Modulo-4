class Alumno {
  // TODO: Agrega el atributo 'carrera' al constructor para que se asigne correctamente
  constructor(nombre, edad, carrera) {
    this.nombre = nombre; // String
    this.edad = edad; // Number
    this.carrera = carrera
    // Tu código aquí
  }

  mostrarInfo() {
    // ⚠️ BUG: Este console.log tiene un error y no está mostrando las variables correctamente. ¡Corrígelo!
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Carrera: ${this.carrera}`)
  }
}

// TEST: Descomenta las siguientes líneas para probar tu código
const alumno1 = new Alumno("Dámazo", 36, "Desarrollo de Aplicaciones Full Stack JavaScript Trainee V2.0");
alumno1.mostrarInfo();

class BandaMusical {
  constructor(nombre, genero, integrantes, discos) {
    this.nombre = nombre; // String
    this.genero = genero; // String
    this.integrantes = integrantes; // Number
    this.discos = discos; // Se espera un Array de strings
  }

  mostrarInfo() {
    console.log(`Banda: ${this.nombre} | Género: ${this.genero} | Integrantes: ${this.integrantes}`);
  }

  listarDiscos() {
    console.log("Discos:", this.discos.join(", "))
  }
}
// TODO: Usa un bucle (for, forEach) o el método .join() para mostrar 
// cada uno de los discos del array de forma ordenada en la consola.
// Tu código aquí

// TODO: Instancia un objeto con los datos de tu banda favorita.
// Recuerda que los discos deben pasar como un Array ['Disco1', 'Disco2'].
const sodaStereo = new BandaMusical(
  "Soda Stereo",
  "Rock latino",
  ["Gustavo Cerati", "Zeta Bosio", "Charly Alberti"],
  ["Soda Stereo", "Nada Personal", "Signos", "Doble Vida", "Canción Animal", "Dynamo", "Sueño Stereo"]
);

// TEST: Descomenta estas líneas para verificar
// miBandaFavorita.mostrarInfo();
// miBandaFavorita.listarDiscos();
sodaStereo.mostrarInfo()
sodaStereo.listarDiscos()

class Perro {
  constructor(nombre, raza, edad) {
    this.nombre = nombre;
    this.raza = raza;
    this.edad = edad;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}, Raza: ${this.raza}, Edad: ${this.edad} años`);
  }

  ladrar() {
    // ⚠️ BUG: Queremos que el perro diga su propio nombre al ladrar (Ej: "¡Guau! Soy Spike"), 
    // pero el siguiente string no está concatenando nada. Arréglalo usando Template Literals.
    console.log(`¡Guau guau! Soy ${this.nombre}`);
  }
}

// TODO: Instancia un objeto de la clase con los datos del famoso "Perro Lipigas"
// (Raza: Mestizo, Edad: 10) o de tu propia mascota.
const copito = new Perro("Copito", "Mestizo", 4)

// TEST: Descomenta para probar
copito.mostrarInfo();
copito.ladrar();




// --------------------- DESAFIO ------------------

/* 

Contexto:
La institución necesita automatizar la gestión del evento. Para ello, crearemos una clase coordinadora llamada Festival. Tu misión es terminar los métodos para registrar bandas, vender entradas y calcular si logramos la meta de alimento.

*/
class Festival {
  constructor(nombre, metaAlimentoKg) {
    this.nombre = nombre;
    this.metaAlimentoKg = metaAlimentoKg;
    this.bandasInvitadas = []; // Array de objetos BandaMusical
    this.asistentes = [];      // Array de objetos Alumno
    this.alimentoRecolectado = 0;
  }

  // 1. TODO: Método para invitar bandas
  invitarBanda(banda) {
    // Debe recibir un objeto Instancia de 'BandaMusical' y agregarlo a 'this.bandasInvitadas'
    this.bandasInvitadas.push(banda)
  }

  // 2. TODO: Método para registrar la entrada de un alumno
  // Cada alumno que entra dona 2 kilos de alimento.
  registrarAsistente(alumno) {
    ;
    this.asistentes.push(alumno);
    // ⚠️ BUG: La siguiente línea debería sumar 2 kilos al total, pero tiene un error de operador.
    this.alimentoRecolectado += 2; // faltaba el + para sumar por cada alumno asistente
  }

  // 3. TODO: Método para verificar el éxito del evento
  verificarMeta() {
    console.log(`--- Balance del ${this.nombre} ---`);
    console.log(`Total recolectado: ${this.alimentoRecolectado}kg de una meta de ${this.metaAlimentoKg}kg.`);


    // TODO: Estructura un condicional (if/else). 
    // Si el alimento recolectado es mayor o igual a la meta, muestra un mensaje de éxito.
    // Si no, muestra cuánto alimento faltó para cumplirla.
    // Tu código aquí:
    if (this.alimentoRecolectado >= this.metaAlimentoKg) {
      console.log("Felicidades!!, logramos la meta.")
    } else {
      const faltante = (this.metaAlimentoKg - this.alimentoRecolectado)
      console.log(`Que lamentable, nos faltan aún ${faltante}kg.`);
    }
  }
}


// ==========================================
// 🧪 AREA DE PRUEBAS (Simulación del evento)
// ==========================================

// 1. Instancias base (Asegúrate de tener tus clases Alumno y Banda listas)
const alumnoBernardo = new Alumno("Bernardo", 25, "Contador");
const alumnoMarjorie = new Alumno("Marjorie", 33, "Psicología");
const miBanda = new BandaMusical("Los Prisioneros", "Rock", 3, ["La voz de los '80", "Pateando piedras"]);

// 2. Creamos el festival con una meta de 4 kilos de alimento
const festivalCanino = new Festival("DogRock 2026", 4);

// 3. ¡A correr el evento! (Descomenta estas líneas cuando programes los métodos)
festivalCanino.invitarBanda(miBanda);
festivalCanino.registrarAsistente(alumnoBernardo);
festivalCanino.registrarAsistente(alumnoMarjorie);

// 4. Verificación
festivalCanino.verificarMeta();
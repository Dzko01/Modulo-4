class AdministradorUsuarios {
    constructor() {
        const url = "https://jsonplaceholder.typicode.com/users";

        // conexion por XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();

        // almacenamos la data dentro de la propiedad de la clase y confirmamos que se haya cargado bien por medio de la consola
        this.usuarios = JSON.parse(xhr.responseText);
        console.log("Datos cargados con éxito en la estructura de la clase.");
    }
    // Listar los nombres de todos los usuarios
    listarNombres() {
        console.log("--- Lista de Nombres de Usuarios ---");
        for (let i = 0; i < this.usuarios.length; i++) {
            console.log(`Nombre: ${this.usuarios[i].name}`);
        }
    }

    // Pedir el nombre de un usuario por prompt y mostrar por consola su información básica (username y correo).
    mostrarInfoBasica() {
        const nombreBuscar = prompt("Ingrese el nombre del usuario:");
        let encontrado = false;

        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].name.toLowerCase() === nombreBuscar.toLowerCase()) {
                console.log("____ Información Básica ____");
                console.log(`Username: ${this.usuarios[i].username}`);
                console.log(`Correo: ${this.usuarios[i].email}`);
                encontrado = true;
                break;
            }
        }
        // si no es encontrado mostrar mensje en consola
        if (!encontrado) console.log("Usuario no encontrado.");
    }

    // Pedir el nombre de un usuario por prompt y listar por consola su dirección [todos los campos].
    // fijamos como const u, para facilitar la escritura y busqueda de informacion en adelante
    mostrarDireccion() {
        const nombreBuscar = prompt("Ingrese el nombre del usuario para ver su dirección:");
        let encontrado = false;

        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].name.toLowerCase() === nombreBuscar.toLowerCase()) {
                const u = this.usuarios[i];
                console.log(`___ Dirección de ${u.name} ---`);
                console.log(`Calle: ${u.address.street}`);
                console.log(`Suite: ${u.address.suite}`);
                console.log(`Ciudad: ${u.address.city}`);
                console.log(`Código Postal: ${u.address.zipcode}`);
                console.log(`Latitud: ${u.address.geo.lat}`);
                console.log(`Longitud: ${u.address.geo.lng}`);
                encontrado = true;
                break;
            }
        }
        // si no es encontrado mostrar mensaje en consola
        if (!encontrado) console.log("Usuario no encontrado.");
    }
    // Pedir el nombre de un usuario por prompt y listar por consola su información avanzada (teléfono, sitio web y compañía [todos los campos])
    mostrarInfoAvanzada() {
        const nombreBuscar = prompt("Ingrese el nombre del usuario para ver info avanzada:");
        let encontrado = false;

        for (let i = 0; i < this.usuarios.length; i++) {
            if (this.usuarios[i].name.toLowerCase() === nombreBuscar.toLowerCase()) {
                const u = this.usuarios[i];
                console.log(`--- Información Avanzada de ${u.name} ---`);
                console.log(`Teléfono: ${u.phone}`);
                console.log(`Sitio Web: ${u.website}`);
                console.log(`Compañía: ${u.company.name}`);
                console.log(`Frase Clave: ${u.company.catchPhrase}`);
                console.log(`BS: ${u.company.bs}`);
                encontrado = true;
                break;
            }
        }

        if (!encontrado) console.log("Usuario no encontrado.");
    }

    // Listar todas las compañías junto a su frase clase (catchphrase)
    listarCompanias() {
        console.log("___ Lista de Compañías y Frases Clave ___");
        for (let i = 0; i < this.usuarios.length; i++) {
            const u = this.usuarios[i];
            console.log(`Compañía: ${u.company.name} | Frase: ${u.company.catchPhrase}`);
        }
    }

    // Listar los nombres de todos los usuarios ordenados alfabéticamente.
    listarOrdenados() {
        console.log("___ Nombres Ordenados Alfabéticamente ___");

        let nombres = [];
        for (let i = 0; i < this.usuarios.length; i++) {
            nombres.push(this.usuarios[i].name);
        }

        nombres.sort(); 

        for (let i = 0; i < nombres.length; i++) {
            console.log(nombres[i]);
        }
    }
}

const administrador = new AdministradorUsuarios();


window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-nombres").addEventListener("click", () => administrador.listarNombres());
    document.getElementById("btn-basica").addEventListener("click", () => administrador.mostrarInfoBasica());
    document.getElementById("btn-direccion").addEventListener("click", () => administrador.mostrarDireccion());
    document.getElementById("btn-avanzada").addEventListener("click", () => administrador.mostrarInfoAvanzada());
    document.getElementById("btn-companias").addEventListener("click", () => administrador.listarCompanias());
    document.getElementById("btn-ordenados").addEventListener("click", () => administrador.listarOrdenados());
});
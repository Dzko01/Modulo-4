# 🚀 Desafíos de Programación Orientada a Objetos (POO) en JavaScript

Este repositorio contiene tres escenarios prácticos diseñados para consolidar conceptos clave de la Programación Orientada a Objetos en JavaScript: clases, herencia, constructores, contexto (`this`) y manipulación del DOM.

## ⚠️ Instrucciones de Inicio

El código de este proyecto **contiene errores intencionales (bugs)**. Tu misión es actuar como desarrollador e instructor de tu propio código: 
1. Abre la consola del navegador (F12) o ejecuta los archivos.
2. Lee atentamente los mensajes de error.
3. Identifica la causa raíz usando la documentación y pistas incluidas abajo.
4. Corrige el código para que funcione al 100%.

---

## 📚 Documentación y Pistas por Desafío

### 1. Escenario Taxis Urbanos (Herencia y Constructores)
**Objetivo:** Modelar una jerarquía de transporte donde `Taxi` es la clase base, `TaxiParticular` extiende de ella, y a su vez `TaxiExpress` y `TaxiPremium` extienden de `TaxiParticular`.

* **Concepto Clave (Herencia):** Cuando una clase hija (subclase) extiende de una clase padre (superclase) y define su propio método `constructor`, **es obligatorio** llamar a la función `super()` antes de intentar usar la palabra clave `this`. De lo contrario, JavaScript no sabrá cómo inicializar la estructura de la clase superior.
* **Pista de Debugging:** Mira con atención la clase `TaxiPremium`. ¿Se está inicializando correctamente la relación con su clase padre `TaxiParticular`? Si ves un error del tipo `ReferenceError: Must call super constructor...`, ya sabes dónde mirar.

### 2. Escenario Catálogo Sony Chile
**Objetivo:** Crear un catálogo organizado por categorías (Televisores, Cámaras, Consolas) reutilizando una clase base `ProductoSony`.

* **Concepto Clave (Ámbito y Propiedades):** Dentro de los métodos de una clase, para acceder a los atributos definidos en el `constructor`, es estrictamente necesario anteponer la palabra clave `this.`. Si se omite, JavaScript buscará una variable local o global con ese nombre en lugar de leer la propiedad del objeto instanciado.
* **Pista de Debugging:** Al ejecutar el método `mostrarInformacion()`, la consola arrojará un error indicando que una variable no está definida (`ReferenceError: X is not defined`). Revisa si el método tiene acceso correcto al contexto del objeto.

### 3. Clase Sumatoria (DOM y Eventos)
**Objetivo:** Crear un botón interactivo que ejecute un método acumulador progresivo utilizando un número base aleatorio entre 1 y 10.

* **Concepto Clave (El Contexto de `this` en Eventos):** Cuando pasas un método de una clase como un *callback* directo dentro de un escuchador de eventos (`addEventListener`), el método pierde el contexto de la instancia original de la clase. En su lugar, `this` pasa a apuntar al elemento del DOM que disparó el evento (el `<button>`). Al intentar sumar un número a una propiedad que el botón no tiene, el resultado será `NaN` (Not a Number).
* **Pista de Debugging:** Para mantener el contexto original de la clase al hacer clic en el botón, tienes dos alternativas comunes en JavaScript moderno:
    1. Envolver la ejecución en una función de flecha: `() => miObjeto.metodo()`
    2. Enlazar explícitamente el contexto usando `.bind()`: `miObjeto.metodo.bind(miObjeto)`

---

## 🛠️ Guía: Cómo subir este proyecto a TU propio GitHub

Dado que has clonado este repositorio desde el enlace original, tu configuración local apunta al repositorio del profesor. Sigue estos pasos para desvincularlo y subir el código resuelto a tu propia cuenta de GitHub:

### Paso 1: Crea un repositorio propio en GitHub
1. Inicia sesión en tu cuenta de GitHub.
2. Haz clic en el botón **"New"** (Nuevo) para crear un repositorio.
3. Asígnale un nombre (ej. desafios-poo-javascript).
4. **IMPORTANTE:** Déjalo completamente vacío. **NO** selecciones las casillas de añadir README, .gitignore ni licencia (ya que el proyecto local ya los incluye).
5. Haz clic en **Create repository**.
6. Copia la URL de tu nuevo repositorio (asegúrate de seleccionar la opción HTTPS o SSH según tu configuración).

### Paso 2: Redirecciona el repositorio local en tu terminal
Abre la terminal dentro de la carpeta del proyecto que clonaste y ejecuta los siguientes comandos:

1. **Verifica cuál es tu remoto actual** (debería mostrar la URL original):

    ```bash
        git remote -v
    ```

2. **Cambia la URL del 'origin' para que apunte a tu nuevo repositorio:**

    ```bash
        git remote set-url origin REEMPLAZA_CON_LA_URL_DE_TU_NUEVO_REPOSITORIO
    ```

3. **Confirma que el cambio se realizó con éxito:**

    ```bash
        git remote -v
    ```
    *(Ahora deberías ver la URL de tu propio perfil de GitHub).*

### Paso 3: Sube tus soluciones
Una vez que hayas corregido los bugs de los tres desafíos, guarda y empuja el código:

1. **Añade los cambios al área de preparación:**

    ```bash
        git add .
    ```
2. **Crea un commit descriptivo:**

    ```bash
        git commit -m "fix: resolución de bugs de POO y ajuste de contexto"
    ```

3. **Sube el código a tu rama principal:**

    ```bash
    git push -u origin main
    ``` 
    
    *(Si tu rama por defecto se llama master, usa git push -u origin master).*

¡Listo! Tu código corregido ya estará visible de forma pública en tu perfil personal.
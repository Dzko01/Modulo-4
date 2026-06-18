/**
 * CLASE BASE: ProductoSony
 * Contiene los atributos comunes de cualquier producto del catálogo.
 */
class ProductoSony {
  constructor(nombre, modelo, precio, categoria) {
    this.nombre = nombre;
    this.modelo = modelo;
    this.precio = precio;
    this.categoria = categoria;
  }

  /**
   * ⚠️ FALLO INTENCIONAL: Se omitió 'this.' al llamar a la variable precio.
   * Esto lanzará un ReferenceError: precio is not defined cuando se ejecute el método.
   */
  mostrarInformacion() {
    console.log(`[${this.categoria}] ${this.nombre} | Modelo: ${this.modelo} | Precio: $${this.precio}`); // A la variable precio se le agrega el this faltante, para que pueda acceder a las propiedades definidas anteriormente en el constructor. Es decir le dimos la instruccion de "Usa la propiedad precio que le pertenece al obejto instanciado"
  }
}

/**
 * CLASES HIJAS POR CATEGORÍA
 */
class Televisor extends ProductoSony {
  constructor(nombre, modelo, precio, pulgadas, resolucion) {
    super(nombre, modelo, precio, "Televisores");
    this.pulgadas = pulgadas;
    this.resolucion = resolucion;
  }
}

class Camara extends ProductoSony {
  constructor(nombre, modelo, precio, megapixeles, tipoLente) {
    super(nombre, modelo, precio, "Cámaras");
    this.megapixeles = megapixeles;
    this.tipoLente = tipoLente;
  }
}

class Consola extends ProductoSony {
  constructor(nombre, modelo, precio, almacenamiento) {
    super(nombre, modelo, precio, "Consolas");
    this.almacenamiento = almacenamiento;
  }
}
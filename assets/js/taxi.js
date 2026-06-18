/**
 * CLASE BASE: Taxi
 * Representa la entidad principal de la cual heredan los demás tipos.
 */
class Taxi {
  constructor(conductor) {
    this.conductor = conductor;
  }

  mostrarInfoBase() {
    console.log(`Conductor a cargo: ${this.conductor}`);
  }
}

/**
 * TAXI TRADICIONAL
 * Hereda de Taxi. Fija el techo amarillo y licencia A1 por defecto.
 */
class TaxiTradicional extends Taxi {
  constructor(conductor) {
    super(conductor);
    this.techo = "Amarillo";
    this.licencia = "A1";
  }
}

/**
 * TAXI PARTICULAR
 * Hereda de Taxi. Fija la licencia B. Actúa como clase padre para Express y Premium.
 */
class TaxiParticular extends Taxi {
  constructor(conductor, modeloAuto) {
    super(conductor);
    this.licencia = "B";
    this.modeloAuto = modeloAuto;
  }
}

/**
 * TAXI EXPRESS
 * Hereda de TaxiParticular. Representa autos típicos.
 */
class TaxiExpress extends TaxiParticular {
  constructor(conductor, modeloAuto) {
    super(conductor, modeloAuto);
    this.categoria = "Típico";
  }
}

/**
 * TAXI PREMIUM
 * Hereda de TaxiParticular. Representa autos de mayor categoría.
 * ⚠️ FALLO INTENCIONAL: Falta llamar a super(). Esto lanzará un ReferenceError al instanciar.
 */
class TaxiPremium extends TaxiParticular {
  constructor(conductor, modeloAuto, extras) {
    super(conductor, modeloAuto)
    this.categoria = "Premium";
    this.extras = extras; 
  }
}

/**
 * TAXI CARGO
 * Hereda de Taxi. Destinado a carga.
 */
class TaxiCargo extends Taxi {
  constructor(conductor, capacidadKilos) {
    super(conductor);
    this.capacidadKilos = capacidadKilos;
    this.uso = "Carga";
  }
}
// models/weightModel.js
class WeightModel {
  constructor() {
    // Conversiones a gramos base
    this.conversions = {
      kg: 1000,
      g: 1,
      lb: 453.592,
    };
  }

  getAvailableUnits() {
    return Object.keys(this.conversions);
  }

  isValidUnit(unit) {
    return this.conversions.hasOwnProperty(unit);
  }

  convert(value, from, to) {
    if (!this.isValidUnit(from) || !this.isValidUnit(to)) {
      throw new Error("Unidad de peso no válida");
    }

    if (!value || isNaN(value)) {
      throw new Error("Valor numérico requerido");
    }

    // Convertir a gramos base
    const baseValue = value * this.conversions[from];
    // Convertir de gramos base a unidad destino
    const result = baseValue / this.conversions[to];

    return {
      result: parseFloat(result.toFixed(6)),
      conversion: `${value} ${from} = ${parseFloat(result.toFixed(6))} ${to}`,
    };
  }
}

module.exports = WeightModel;

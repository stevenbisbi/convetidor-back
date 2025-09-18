// models/timeModel.js
class TimeModel {
  constructor() {
    // Conversiones a minutos base
    this.conversions = {
      hours: 60,
      days: 1440, // 24 * 60
      months: 43200, // 30 * 24 * 60 (promedio)
      years: 525600, // 365 * 24 * 60
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
      throw new Error("Unidad de tiempo no válida");
    }

    if (!value || isNaN(value)) {
      throw new Error("Valor numérico requerido");
    }

    // Convertir a minutos base
    const baseValue = value * this.conversions[from];
    // Convertir de minutos base a unidad destino
    const result = baseValue / this.conversions[to];

    return {
      result: parseFloat(result.toFixed(6)),
      conversion: `${value} ${from} = ${parseFloat(result.toFixed(6))} ${to}`,
    };
  }
}

module.exports = TimeModel;

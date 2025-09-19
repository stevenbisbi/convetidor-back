class CurrencyModel {
  constructor() {
    this.units = ["usd", "cop", "eur"];

    // Tasas de cambio simuladas (en producción usar API real)
    this.rates = {
      usd: { cop: 4200, eur: 0.85 },
      cop: { usd: 1 / 4200, eur: 0.85 / 4200 },
      eur: { usd: 1 / 0.85, cop: 4200 / 0.85 },
    };
  }

  getAvailableUnits() {
    return this.units;
  }

  isValidUnit(unit) {
    return this.units.includes(unit);
  }

  convert(value, from, to) {
    if (!this.isValidUnit(from) || !this.isValidUnit(to)) {
      throw new Error("Moneda no válida");
    }

    if (!value || isNaN(value)) {
      throw new Error("Valor numérico requerido");
    }

    let result;

    if (from === to) {
      result = value;
    } else if (this.rates[from] && this.rates[from][to]) {
      result = value * this.rates[from][to];
    } else {
      throw new Error("Par de monedas no soportado");
    }

    return {
      result: parseFloat(result.toFixed(2)),
      conversion: `${value} ${from.toUpperCase()} = ${parseFloat(
        result.toFixed(2)
      )} ${to.toUpperCase()}`,
    };
  }

  // Método para actualizar tasas (útil para integración con API real)
  updateRates(newRates) {
    this.rates = { ...this.rates, ...newRates };
  }
}

module.exports = CurrencyModel;

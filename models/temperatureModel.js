// models/temperatureModel.js
class TemperatureModel {
  constructor() {
    this.units = ["celsius", "fahrenheit", "kelvin"];

    this.conversions = {
      celsiusToFahrenheit: (c) => (c * 9) / 5 + 32,
      celsiusToKelvin: (c) => c + 273.15,
      fahrenheitToCelsius: (f) => ((f - 32) * 5) / 9,
      fahrenheitToKelvin: (f) => ((f - 32) * 5) / 9 + 273.15,
      kelvinToCelsius: (k) => k - 273.15,
      kelvinToFahrenheit: (k) => ((k - 273.15) * 9) / 5 + 32,
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
      throw new Error("Unidad de temperatura no válida");
    }

    if (value === undefined || isNaN(value)) {
      throw new Error("Valor numérico requerido");
    }

    let result;

    if (from === to) {
      result = value;
    } else {
      const conversionKey = `${from}To${
        to.charAt(0).toUpperCase() + to.slice(1)
      }`;

      if (this.conversions[conversionKey]) {
        result = this.conversions[conversionKey](value);
      } else {
        throw new Error("Conversión de temperatura no soportada");
      }
    }

    return {
      result: parseFloat(result.toFixed(2)),
      conversion: `${value}°${from.toUpperCase()} = ${parseFloat(
        result.toFixed(2)
      )}°${to.toUpperCase()}`,
    };
  }
}

module.exports = TemperatureModel;

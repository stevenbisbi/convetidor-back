const TemperatureModel = require("../models/temperatureModel");

class TemperatureController {
  constructor() {
    this.temperatureModel = new TemperatureModel();
  }

  convert = (req, res) => {
    try {
      const { value, from, to } = req.body;

      if (value === undefined || !from || !to) {
        return res.status(400).json({
          error: "Faltan parámetros requeridos",
          required: ["value", "from", "to"],
        });
      }

      const result = this.temperatureModel.convert(parseFloat(value), from, to);

      res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };

  getUnits = (req, res) => {
    try {
      const units = this.temperatureModel.getAvailableUnits();
      res.json({
        success: true,
        data: units,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Error al obtener unidades de temperatura",
      });
    }
  };
}

module.exports = TemperatureController;

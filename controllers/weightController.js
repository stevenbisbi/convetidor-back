const WeightModel = require("../models/weightModel");

class WeightController {
  constructor() {
    this.weightModel = new WeightModel();
  }

  convert = (req, res) => {
    try {
      const { value, from, to } = req.body;

      if (!value || !from || !to) {
        return res.status(400).json({
          error: "Faltan parámetros requeridos",
          required: ["value", "from", "to"],
        });
      }

      const result = this.weightModel.convert(parseFloat(value), from, to);

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
      const units = this.weightModel.getAvailableUnits();
      res.json({
        success: true,
        data: units,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Error al obtener unidades de peso",
      });
    }
  };
}

module.exports = WeightController;

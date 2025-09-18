// controllers/timeController.js
const TimeModel = require("../models/timeModel");

class TimeController {
  constructor() {
    this.timeModel = new TimeModel();
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

      const result = this.timeModel.convert(parseFloat(value), from, to);

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
      const units = this.timeModel.getAvailableUnits();
      res.json({
        success: true,
        data: units,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Error al obtener unidades de tiempo",
      });
    }
  };
}

module.exports = TimeController;

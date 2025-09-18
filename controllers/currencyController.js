// controllers/currencyController.js
const CurrencyModel = require("../models/currencyModel");

class CurrencyController {
  constructor() {
    this.currencyModel = new CurrencyModel();
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

      const result = this.currencyModel.convert(parseFloat(value), from, to);

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
      const units = this.currencyModel.getAvailableUnits();
      res.json({
        success: true,
        data: units,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Error al obtener unidades de moneda",
      });
    }
  };

  updateRates = (req, res) => {
    try {
      const { rates } = req.body;

      if (!rates) {
        return res.status(400).json({
          error: "Rates object is required",
        });
      }

      this.currencyModel.updateRates(rates);

      res.json({
        success: true,
        message: "Tasas de cambio actualizadas correctamente",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  };
}

module.exports = CurrencyController;

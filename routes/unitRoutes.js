// routes/unitRoutes.js
const express = require("express");
const TimeModel = require("../models/timeModel");
const WeightModel = require("../models/weightModel");
const TemperatureModel = require("../models/temperatureModel");
const CurrencyModel = require("../models/currencyModel");

const router = express.Router();

// GET /api/units
router.get("/", (req, res) => {
  try {
    const timeModel = new TimeModel();
    const weightModel = new WeightModel();
    const temperatureModel = new TemperatureModel();
    const currencyModel = new CurrencyModel();

    const units = {
      time: timeModel.getAvailableUnits(),
      weight: weightModel.getAvailableUnits(),
      temperature: temperatureModel.getAvailableUnits(),
      currency: currencyModel.getAvailableUnits(),
    };

    res.json({
      success: true,
      data: units,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Error al obtener las unidades disponibles",
    });
  }
});

module.exports = router;

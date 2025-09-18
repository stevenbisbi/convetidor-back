// routes/temperatureRoutes.js
const express = require("express");
const TemperatureController = require("../controllers/temperatureController");

const router = express.Router();
const temperatureController = new TemperatureController();

// POST /api/convert/temperature
router.post("/", temperatureController.convert);

// GET /api/convert/temperature/units
router.get("/units", temperatureController.getUnits);

module.exports = router;

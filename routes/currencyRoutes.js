const express = require("express");
const CurrencyController = require("../controllers/currencyController");

const router = express.Router();
const currencyController = new CurrencyController();

// POST /api/convert/currency
router.post("/", currencyController.convert);

// GET /api/convert/currency/units
router.get("/units", currencyController.getUnits);

// PUT /api/convert/currency/rates
router.put("/rates", currencyController.updateRates);

module.exports = router;

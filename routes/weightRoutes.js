const express = require("express");
const WeightController = require("../controllers/weightController");

const router = express.Router();
const weightController = new WeightController();

// POST /api/convert/weight
router.post("/", weightController.convert);

// GET /api/convert/weight/units
router.get("/units", weightController.getUnits);

module.exports = router;

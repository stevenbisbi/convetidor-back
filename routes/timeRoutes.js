// routes/timeRoutes.js
const express = require("express");
const TimeController = require("../controllers/timeController");

const router = express.Router();
const timeController = new TimeController();

// POST /api/convert/time
router.post("/", timeController.convert);

// GET /api/convert/time/units
router.get("/units", timeController.getUnits);

module.exports = router;

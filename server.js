const express = require("express");
const cors = require("cors");
const timeRoutes = require("./routes/timeRoutes");
const weightRoutes = require("./routes/weightRoutes");
const temperatureRoutes = require("./routes/temperatureRoutes");
const currencyRoutes = require("./routes/currencyRoutes");
const unitRoutes = require("./routes/unitRoutes");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(
  cors({
    origin: "https://convetidor-front.vercel.app",
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

// Routes
app.use("/api/convert/time", timeRoutes);
app.use("/api/convert/weight", weightRoutes);
app.use("/api/convert/temperature", temperatureRoutes);
app.use("/api/convert/currency", currencyRoutes);
app.use("/api/units", unitRoutes);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Servidor funcionando correctamente" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;

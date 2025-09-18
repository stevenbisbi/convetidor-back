// debug-server.js
console.log("🚀 Iniciando servidor con debug...");

const express = require("express");
console.log("✅ Express importado");

const cors = require("cors");
console.log("✅ CORS importado");

console.log("📁 Importando rutas...");

try {
  const timeRoutes = require("./routes/timeRoutes");
  console.log("✅ timeRoutes importado");
} catch (error) {
  console.log("❌ Error importando timeRoutes:", error.message);
}

try {
  const weightRoutes = require("./routes/weightRoutes");
  console.log("✅ weightRoutes importado");
} catch (error) {
  console.log("❌ Error importando weightRoutes:", error.message);
}

try {
  const temperatureRoutes = require("./routes/temperatureRoutes");
  console.log("✅ temperatureRoutes importado");
} catch (error) {
  console.log("❌ Error importando temperatureRoutes:", error.message);
}

try {
  const currencyRoutes = require("./routes/currencyRoutes");
  console.log("✅ currencyRoutes importado");
} catch (error) {
  console.log("❌ Error importando currencyRoutes:", error.message);
}

try {
  const unitRoutes = require("./routes/unitRoutes");
  console.log("✅ unitRoutes importado");
} catch (error) {
  console.log("❌ Error importando unitRoutes:", error.message);
}

console.log("🔧 Configurando servidor...");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Servidor funcionando correctamente" });
});

app.listen(PORT, () => {
  console.log(`🎉 Servidor corriendo en http://localhost:${PORT}`);
});

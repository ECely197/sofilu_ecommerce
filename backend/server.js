const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/greeting", (req, res) => {
  res.json({
    message: "Conectado, este mensaje viene desde el backend de sofilu",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

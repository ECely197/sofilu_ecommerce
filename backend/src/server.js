const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB Atlas con exito"))
  .catch((error) => console.error("Error al coenctar a MOngoDB", error));

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los productos" });
  }
});

app.get("/api/greeting", (req, res) => {
  res.json({
    message: "¡Conectado! Este mensaje viene desde el backend de Sofilu.",
  });
});
app.listen(PORT, () => {
  console.log(`Servidor de Sofilu corriendo en http://localhost:${PORT}`);
});

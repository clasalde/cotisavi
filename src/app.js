import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8080;

import express from "express";
const app = express();

import "./database.js"

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.get("/", (req, res) => {
  res.send("Estamos conectados con el Backend");
});

//Listen
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto: ${PORT}`);
});
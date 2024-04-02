import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8080;
import cors from "cors";

import carsRouter from "./routes/cars.router.js";

import express from "express";
const app = express();

import "./database.js";

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Rutas
app.use("/api", carsRouter);

//Listen
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto: ${PORT}`);
});

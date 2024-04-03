import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT;
import cors from "cors";

import carsRouter from "./routes/cars.router.js";
import costumersRouter from "./routes/customers.router.js";

import express from "express";
const app = express();

import "./database.js";

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Rutas
app.use("/api", carsRouter);
app.use("/api", costumersRouter);

//Listen
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto: ${PORT}`);
});

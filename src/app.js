import express, { urlencoded } from "express";

const app = express();
const PUERTO = 8080;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas
app.get("/", (req, res) => {
  res.send("Estamos conectados con el Backend");
});

//Listen
app.listen(PUERTO, () => {
  console.log(`Escuchando en el puerto: ${PUERTO}`);
});

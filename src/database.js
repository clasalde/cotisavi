import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectarse a MongoDB:', error));
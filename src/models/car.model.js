import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  vigente: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true
  }
});

const CarModel = mongoose.model("cars", carSchema);

export default CarModel;

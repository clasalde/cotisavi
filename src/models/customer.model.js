import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    telefono: {
      type: Number,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    dinero: {
      type: Number,
    },
    interes: {
      type: String,
    },
  },
  { timestamps: true }
);

const CustomerModel = mongoose.model("customers", customerSchema);

export default CustomerModel;

import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import "./carForm.css";

function CarForm() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [version, setVersion] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/cars", {
        marca,
        modelo,
        version,
        img,
        description,
        price,
      });
      console.log("Datos guardados correctamente");
      setMarca("");
      setModelo("");
      setVersion("");
      setImg("");
      setDescription("");
      setPrice("");
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto">
        <h1 className="uppercase font-light formHeaderText">
          formulario de carga
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 mb-4 rounded-md"
        >
          <div className="gap-3 bg-slate-800">
            <input
              value={marca}
              placeholder="Marca"
              onChange={(e) => setMarca(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
              autoFocus
            />
            <input
              value={modelo}
              placeholder="Modelo"
              onChange={(e) => setModelo(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            <input
              value={version}
              placeholder="Versión"
              onChange={(e) => setVersion(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            {/* <input
            value={marca}
            placeholder="Marca"
            onChange={(e) => setMarca(e.target.value)}
            className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            autoFocus
          />
          <input
            value={modelo}
            placeholder="Modelo"
            onChange={(e) => setModelo(e.target.value)}
            className="bg-slate-200 p-3 w-full mb-2 rounded-md"
          />
          <input
            value={version}
            placeholder="Versión"
            onChange={(e) => setVersion(e.target.value)}
            className="bg-slate-200 p-3 w-full mb-2 rounded-md"
          /> */}
            <input
              value={price}
              placeholder="Precio"
              onChange={(e) => setPrice(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            <input
              value={img}
              placeholder="URL de la imagen"
              onChange={(e) => setImg(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            <textarea
              value={description}
              name="description"
              cols="20"
              rows="3"
              placeholder="Descripción"
              onChange={(e) => setDescription(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            ></textarea>
            <button className="bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500 rounded-md">
              Cargar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CarForm;

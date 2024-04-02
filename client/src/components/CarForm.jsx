import { useState } from "react";
import axios from "axios";

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
      const response = await axios.post("http://localhost:5000/api/cars", {
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
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <h1 className="text-xl text-white mb-3 bg-slate-800 box uppercase font-thin text-center">
          Cargar nuevo Plan
        </h1>
        <div className="flex gap-3 bg-slate-800">
          <div className="bg-slate-800">
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
            <input
              value={price}
              placeholder="Precio"
              onChange={(e) => setPrice(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
          </div>
        </div>
        <input
          value={img}
          placeholder="Ruta imagen"
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
      </form>
    </div>
  );
}

export default CarForm;

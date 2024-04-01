import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [version, setVersion] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");

  const { createNewTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask({
      marca: marca,
      modelo: modelo,
      version: version,
      img: img,
      description: description,
    });
    setMarca("");
    setModelo("");
    setVersion("");
    setImg("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mb-3 bg-slate-800 box">
          Nuevo Auto
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
          </div>
          <div className="bg-slate-800">
            <input
              value={version}
              placeholder="Versión"
              onChange={(e) => setVersion(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            <input
              value={img}
              placeholder="Ruta imagen"
              onChange={(e) => setImg(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
          </div>
        </div>
        <textarea
          value={description}
          name="description"
          cols="20"
          rows="2"
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-200 p-3 w-full mb-2 rounded-md"
        ></textarea>
        <button className="bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500 rounded-md">
          Cargar Auto
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

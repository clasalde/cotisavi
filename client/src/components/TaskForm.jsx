import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createNewTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask({
      title: title,
      description: description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3 bg-slate-800">
          Crea tu tarea
        </h1>
        <input
          value={title}
          placeholder="Tarea"
          onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          value={description}
          name="description"
          cols="20"
          rows="3"
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-500 rounded-md">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;

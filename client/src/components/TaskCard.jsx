import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../components/taskCard.css";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const { editTask } = useContext(TaskContext);

  return (
    <div className="border  border-slate-400 bg-gray-800 text-white p-4 rounded-md flex-col align-middle">
      <div className="w-100 flex justify-center imageContainer mb-3 bg-gray-800">
        <img className="carImage bg-gray-800 rounded-md" src={task.img} />
      </div>
      <div className="flex-row">
        <div className="bg-gray-800 flex justify-start gap-3">
          <h1 className="text-xl font-bold uppercase bg-gray-800">
            {task.marca}
          </h1>
          <h2 className="text-xl capitalize bg-gray-800">{task.modelo}</h2>
          <h3 className="text-xl capitalize bg-gray-800">{task.version}</h3>
        </div>
      </div>
      <p className="text-gray-400 text-md bg-gray-800 h-24">
        {task.description}
      </p>
      <div className="flex gap-4 bg-gray-800">
        <button
          className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 w-20"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-violet-900 px-2 py-1 rounded-md hover:bg-violet-400 w-20"
          onClick={() => editTask(task.id)}
        >
          Editar
        </button>
      </div>
    </div>
  );
}

export default TaskCard;

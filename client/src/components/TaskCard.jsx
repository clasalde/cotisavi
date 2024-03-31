import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex-col align-middle">
      <div className="w-50%">
        <img
          className="object-cover text-xl capitalize bg-gray-800"
          src={task.img}
        />
      </div>
      <div>
        <div className="bg-gray-800">
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

      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Auto
      </button>
    </div>
  );
}

export default TaskCard;

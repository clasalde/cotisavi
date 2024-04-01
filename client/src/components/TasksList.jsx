import TaskCard from "../components/TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasksList() {
  const { tasksList } = useContext(TaskContext);

  if (tasksList.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No hay autos definidos
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      {tasksList.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
}

export default TasksList;

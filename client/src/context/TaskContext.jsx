import { createContext, useState } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasksList, setTasksList] = useState([]);

  const createNewTask = (newTask) => {
    setTasksList([
      ...tasksList,
      {
        title: newTask.title,
        id: tasksList.length,
        description: newTask.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasksList(tasksList.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasksList,
        createNewTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

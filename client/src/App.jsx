import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="container mx-auto p-10">
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default App;

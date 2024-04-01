import TasksList from "./components/TasksList";
import TaskForm from "./components/TaskForm";
import "./index.css";

function App() {
  let isAdmin = false;

  if (!isAdmin) {
    return (
      <div className="container mx-auto p-10">
        <h1 className="text-center text-white font-light mb-8 uppercase textPlanes">
          Nuestos planes de Ahorro
        </h1>
        <TasksList />
      </div>
    );
  } else {
    return (
      <div className="container mx-auto p-10">
        <TaskForm />
        <TasksList />
      </div>
    );
  }
}

export default App;

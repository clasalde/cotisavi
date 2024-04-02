import CarsList from "./components/CarsList";
import CarForm from "./components/CarForm";
import "./index.css";

function App() {

  return (
    <div className="container mx-auto p-10">
      <CarForm />
      <CarsList />
    </div>
  );
}

export default App;

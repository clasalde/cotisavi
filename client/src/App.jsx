import CarsList from "./components/CarsList";
import CarForm from "./components/CarForm";
import HomePage from "./components/HomePage";
import CustomerForm from "./components/CustomerForm";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cars/form" element={<CarForm />} />
        <Route path="/cars" element={<CarsList />} />
        <Route path="/customer" element={<CustomerForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

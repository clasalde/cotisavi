import { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "./CarCard";
import "./carsList.css";

function CarsList() {
  const [carsList, setCarsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [carsList]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cars");
      setCarsList(response.data.payload.docs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (carsList.length !== 0) {
    return (
      <div className="grid grid-cols-4 gap-6">
        {carsList.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    );
  } else {
    return (
      <h1 className="flex justify-center m-auto mt-10 text-white font-thin uppercase cargar">
        No existen planes cargados
      </h1>
    );
  }
}

export default CarsList;

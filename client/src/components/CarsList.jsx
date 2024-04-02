import NavBar from "./NavBar";
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
      const response = await axios.get("http://localhost:8080/api/cars");
      setCarsList(response.data.payload.docs);

      if (carsList.length === 0) {
        return <h1>No existen planes en stock</h1>;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <NavBar />
      <h1 className="uppercase font-light planesText">Planes Vigentes</h1>
      <div className="container m-auto grid grid-cols-4 gap-5">
        {carsList.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </>
  );
}

export default CarsList;

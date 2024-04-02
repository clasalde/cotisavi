import "../components/carCard.css";
import axios from "axios";

function CarCard({ car }) {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/cars/${car._id}`
      );

      console.log("Auto eliminado correctamente");
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  return (
    <div className="border border-slate-400 bg-gray-800 text-white p-4 rounded-md flex-col align-middle">
      <div className="w-100 flex justify-center imageContainer mb-3 bg-gray-800">
        <img className="carImage bg-gray-800 rounded-md" src={car.img} />
      </div>
      <div className="flex-row">
        <div className="bg-gray-800 flex-col mb-3">
          <div className="bg-gray-800 flex justify-start gap-3">
            <h1 className="text-xl font-bold uppercase bg-gray-800">
              {car.marca}
            </h1>
            <h2 className="text-xl capitalize bg-gray-800">{car.modelo}</h2>
          </div>
          <h3 className="text-xl capitalize bg-gray-800">{car.version}</h3>
          <h3 className="text-xl capitalize bg-gray-800 text-orange-300">
            $ {car.price}
          </h3>
        </div>
      </div>
      <p className="flex flex-wrap text-gray-400 text-md bg-gray-800 h-24">
        {car.description}
      </p>
      <div className="flex gap-4 bg-gray-800">
        <button
          className="bg-red-500 px-2 py-1 rounded-md hover:bg-red-400 w-20"
          onClick={handleDelete}
        >
          Eliminar
        </button>
        <button className="bg-violet-900 px-2 py-1 rounded-md hover:bg-violet-400 w-20">
          Editar
        </button>
      </div>
    </div>
  );
}

export default CarCard;

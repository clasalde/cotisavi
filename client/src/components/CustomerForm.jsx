import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import "./customerForm.css";

function CarForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [dinero, setDinero] = useState("");
  const [interes, setInteres] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/customers", {
        nombre,
        apellido,
        telefono,
        mail,
        dinero,
        interes,
      });
      console.log("Datos guardados correctamente");
      setNombre("");
      setApellido("");
      setTelefono("");
      setMail("");
      setDinero("");
      setInteres("");
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto">
        <h1 className="uppercase font-light formHeaderText">
          datos del prospecto
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-8 mb-4 rounded-md"
        >
          <div className="gap-3 bg-slate-800">
            <input
              value={nombre}
              placeholder="Nombre"
              onChange={(e) => setNombre(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
              autoFocus
            />
            <input
              value={apellido}
              placeholder="Apellido"
              onChange={(e) => setApellido(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            <input
              value={telefono}
              placeholder="Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            <input
              value={mail}
              placeholder="E-mail"
              onChange={(e) => setMail(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            <input
              value={dinero}
              placeholder="Dinero disponible"
              onChange={(e) => setDinero(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            />
            <textarea
              value={interes}
              name="interes"
              cols="20"
              rows="6"
              placeholder="Perfil del prospecto"
              onChange={(e) => setInteres(e.target.value)}
              className="bg-slate-200 p-3 w-full mb-2 rounded-md"
            ></textarea>
            <button className="bg-lime-700 px-3 py-1 text-white hover:bg-lime-500 rounded-md">
              Ir a Cotización
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CarForm;

import NavBar from "./NavBar";
import { useState } from "react";
import axios from "axios";
import "./customerForm.css";
// import Cotizacion from "./Cotizacion";

function CustomerForm() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mail, setMail] = useState("");
  const [dinero, setDinero] = useState("");
  const [interes, setInteres] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // if (submitted) {
  //   return <Cotizacion nombre={nombre} apellido={apellido} />;
  // }

  const handleCustomerSubmit = async (e) => {
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
      // setSubmitted(true);
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
          className="bg-slate-800 p-8 mb-4 rounded-md"
          onSubmit={handleCustomerSubmit}
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
            <button className="bg-lime-700 text-white px-2 py-1 rounded-md hover:bg-lime-500 w-40">
              Generar Cotización
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CustomerForm;

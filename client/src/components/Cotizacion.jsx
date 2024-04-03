import NavBar from "./NavBar";
import "./cotizacion.css";

function Cotizacion(props) {
  console.log(props.nombre);
  console.log(props.apellido)

  return (
    <>
      <NavBar />
      <h1 className="uppercase font-light cotizacionText">Cotización</h1>
      <p className="uppercase font-light cotizacionText">{props.nombre}</p>
      <p className="uppercase font-light cotizacionText">{props.apellido}</p>
    </>
  );
}

export default Cotizacion;

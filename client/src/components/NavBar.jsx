import { NavLink } from "react-router-dom";
import "./homePage.css";

function NavBar() {
  return (
    <nav className="flex justify-between homePage">
      <NavLink to="/" className="flex p-3">
        <img src="https://savi.com.ar/wp-content/uploads/2023/06/savi-by-giama-blanco.png" />
      </NavLink>
      <ul className="flex">
        <li>
          <NavLink to="/cars" className="mr-10 hover:text-amber-400">
            Planes
          </NavLink>
          <NavLink to="/cars/form" className="mr-10 hover:text-amber-400">
            Admin
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

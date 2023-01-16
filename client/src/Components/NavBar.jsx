import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <header>
        <h1>Sistema de Gestion de Asistencias</h1>
        <br />
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mantenimientoEmpleados">Mantenimiento Empleados</Link>
          </li>
          <li>
            <Link to="/login">prueba</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

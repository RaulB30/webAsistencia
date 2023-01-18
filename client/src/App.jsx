import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MantenimientoEmpleados from "./Pages/MantenimientoEmpleados";
import FrmEmpleados from "./Pages/FrmEmpleados";
import NotFound from "./Pages/NotFound";
import Prueba from "./Pages/Prueba";
import Login from "./Pages/Login";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/listadoEmpleados"
          element={<MantenimientoEmpleados />}
        ></Route>
        <Route path="/nuevoEmpleado" element={<FrmEmpleados />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route
          path="/mantenimientoEmpleados"
          element={<MantenimientoEmpleados />}
        ></Route>
        <Route path="/prueba" element={<Prueba />}></Route>
        <Route path="/editEmpleado/:id" element={<FrmEmpleados />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/userPage" element={<UserPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

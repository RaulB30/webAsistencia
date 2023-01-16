import { Router } from "express";

import {
  getEmpleados,
  getEmpleado,
  crearEmpleado,
  actEmpleados,
  eliEmpleados,
  loginEmpleado
  
} from "../controllers/empleados.controller.js";

const router = Router();

router.get("/empleados", getEmpleados);

router.get("/empleados/:id", getEmpleado);

router.post("/empleados", crearEmpleado);

router.put("/empleados/:id", actEmpleados);

router.delete("/empleados/:id", eliEmpleados);

router.post("/empleados",loginEmpleado)

export default router;

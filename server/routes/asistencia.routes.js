import { Router } from "express";

import { obtenerRegistro } from "../controllers/asistencia.controller.js";

const router = Router();

router.get("/asistencia/getRegistro/:id", obtenerRegistro)

export default router;
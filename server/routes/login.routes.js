import { Router } from "express";

import { loginEmpleado } from "../controllers/login.controller.js";

const router = Router();

router.post("/loginUser", loginEmpleado);

export default router;
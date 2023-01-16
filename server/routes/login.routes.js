import { Router } from "express";

import { loginEmpleado } from "../controllers/login.controller.js";

const router = Router();

router.post("/login", loginEmpleado);

export default router;
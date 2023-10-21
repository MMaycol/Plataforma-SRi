import { Router } from "express";

import {Inicios } from "../Controller/InicioController";


const router = Router();
router.get("/", Inicios);
export default router; 
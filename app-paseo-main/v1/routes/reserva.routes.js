import express from "express";
import { crearReserva } from "../controllers/reserva.controller.js";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware.js";
import { reservaSchema } from "../validators/reserva.validators.js";
import { validateParamsMiddleware } from "../middlewares/validateParams.middleware.js";
import { authenticateMiddleware } from "../middlewares/authenticate.middleware.js";

const router = express.Router();



router.post(
    "/crearReserva",
    authenticateMiddleware,
    validateBodyMiddleware(reservaSchema),
    crearReserva
);
export default router;
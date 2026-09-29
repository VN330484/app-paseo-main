import express from "express";
import { crearMascota, eliminarMascota, actualizarMascota, obtenerMascotas, obtenerMascotaPorRaza , obtenerMascotaPorEdad} from "../controllers/mascota.controller.js";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware.js";
import { mascotaSchema, mascotaIdParamSchema, actualizarMascotaSchema, mascotaEdadParamSchema} from "../validators/mascota.validators.js";
import {validateParamsMiddleware} from "../middlewares/validateParams.middleware.js";
import { authenticateMiddleware } from "../middlewares/authenticate.middleware.js";

const router = express.Router();




//router.get("/", obtenerMascotas);
router.post(
    "/crearMascota",
    authenticateMiddleware,
    validateBodyMiddleware(mascotaSchema),
    crearMascota
);
router.delete(
    "/eliminarMascota/:id",
    authenticateMiddleware,
    validateParamsMiddleware(mascotaIdParamSchema),
    eliminarMascota
);

router.patch("/actualizarMascota/:id", authenticateMiddleware,validateParamsMiddleware(mascotaIdParamSchema), validateBodyMiddleware(actualizarMascotaSchema), actualizarMascota);

router.get("/",authenticateMiddleware, obtenerMascotas);
router.get("/raza/:raza", authenticateMiddleware, obtenerMascotaPorRaza);
router.get("/edad/:edad", authenticateMiddleware, validateParamsMiddleware(mascotaEdadParamSchema),obtenerMascotaPorEdad);

export default router;




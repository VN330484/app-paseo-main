import express from "express";
import { crearCategoria, eliminarCategoria,actualizarCategoria, obtenerCategoriaPorId,obtenerCategorias } from "../controllers/categoria.controller.js";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware.js";
import { authenticateMiddleware } from "../middlewares/authenticate.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
import { categoriaServicioSchema, categoriaIdParamSchema,actualizarCategoriaSchema } from "../validators/categoria.validators.js";
import { validateParamsMiddleware } from "../middlewares/validateParams.middleware.js";


const router = express.Router();


router.post(
    "/crearCategoria",
    authenticateMiddleware,
    adminMiddleware,
    validateBodyMiddleware(categoriaServicioSchema),
    crearCategoria
);

router.delete(
    "/eliminarCategoria/:id",
    authenticateMiddleware,
    adminMiddleware,
    validateParamsMiddleware(categoriaIdParamSchema),
    eliminarCategoria
);

router.patch(
    "/actualizarCategoria/:id",
    authenticateMiddleware,
    adminMiddleware,
    validateParamsMiddleware(categoriaIdParamSchema),
    validateBodyMiddleware(actualizarCategoriaSchema),
    actualizarCategoria
);

router.get(
    "/obtenerCategoria/:id",
    authenticateMiddleware,
    adminMiddleware,
    validateParamsMiddleware(categoriaIdParamSchema),
    obtenerCategoriaPorId
);

router.get("/",authenticateMiddleware,
    adminMiddleware,
    obtenerCategorias);



export default router;

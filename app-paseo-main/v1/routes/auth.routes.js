import express from 'express';
import { ingresarUsuario, registrarUsuario, cambiarPlan } from '../controllers/auth.controller.js';
import { loginSchema, registerSchema } from '../validators/auth.validators.js';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware.js';
import {validateParamsMiddleware} from '../middlewares/validateParams.middleware.js';
import { authenticateMiddleware } from '../middlewares/authenticate.middleware.js';


const router = express.Router({ mergeParams: true });

router.post('/login',validateBodyMiddleware(loginSchema), ingresarUsuario);
router.post('/register', validateBodyMiddleware(registerSchema), registrarUsuario);
router.patch('/cambiar-plan', authenticateMiddleware, cambiarPlan);

export default router;
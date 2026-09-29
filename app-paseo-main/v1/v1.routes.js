import express from 'express';
import authRouter from './routes/auth.routes.js';
import mascotasRouter from './routes/mascota.routes.js';
import reservaRouter from './routes/reserva.routes.js';
import categoriaRouter from './routes/categoria.routes.js';
import uploadsRouter from "./routes/uploads.routes.js"; 
import { authenticateMiddleware } from './middlewares/authenticate.middleware.js';

const router = express.Router({mergeParams: true});

//Rutas públicas Login y Registro
router.use('/auth', authRouter);
router.use('/mascotas', mascotasRouter);
router.use('/categorias',categoriaRouter);
router.use('/reserva', reservaRouter);
router.use('/uploads', uploadsRouter);

//middleware para verificacion de token
router.use(authenticateMiddleware);

//Rutas protegidas


 export default router;
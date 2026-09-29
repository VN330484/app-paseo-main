import { crearReservaService } from '../services/reserva.services.js';

export const crearReserva = async (req, res) => {

    const reserva = await crearReservaService(
        req.validatedBody,
        req.decoded.usuario
    );

    res.status(201).json(reserva);
};
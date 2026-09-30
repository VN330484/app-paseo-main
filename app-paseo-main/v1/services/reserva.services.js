import Reserva from '../models/reserva.model.js';
import Mascota from '../models/mascota.model.js';
import Categoria from '../models/categoria.model.js';

import { enviarReservaEmail } from "./email.services.js";

export const crearReservaService = async (reservaData) => {

    const reservaBuscada = await Reserva.findOne({
        mascota: reservaData.mascota,
        categoria: reservaData.categoria,
        fecha: reservaData.fecha
    });

    if (reservaBuscada) {
        const error = new Error(
            "Ya existe una reserva para esta mascota, categoría y fecha"
        );

        error.status = 400;

        throw error;
    }

    const reserva = new Reserva(reservaData);

    await reserva.save();

    const mascota = await Mascota.findById(
        reserva.mascota
    );

    const categoria = await Categoria.findById(
        reserva.categoria
    );

    try {

        console.log("INTENTANDO ENVIAR EMAIL");

        await enviarReservaEmail(
            mascota.nombre,
            categoria.nombre,
            reserva.fecha
        );

        console.log("EMAIL ENVIADO");

    } catch (error) {

        console.log(
            "No se pudo enviar el email."
        );

        console.log(error);

    }

    return reserva;
};
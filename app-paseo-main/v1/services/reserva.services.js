import Reserva from '../models/reserva.model.js';


export const crearReservaService = async (reservaData) => {
    const reservaBuscada = await Reserva.findOne({ nombre: reservaData.nombre });

    if (reservaBuscada) {
        const error = new Error("La reserva ya existe");
        error.status = 400;
        error.details = { reservaData };
        throw error;
    }

    const reserva = new Reserva(reservaData);
    await reserva.save();
    return reserva;
}
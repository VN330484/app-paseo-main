import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
    mascota: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mascota",
        required: true
    },

    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categoria",
        required: true
    },

    fecha: {
        type: Date,
        required: true
    }
});

const Reserva = mongoose.model(
    "Reserva",
    reservaSchema,
    "reservas"
);

export default Reserva;
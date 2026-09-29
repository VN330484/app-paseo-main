import Mascota from "../models/mascota.model.js";
import Usuario from "../models/usuario.model.js";

export const crearMascotaService = async (mascotaData, username) => {
    const mascotaBuscada = await Mascota.findOne({ nombre: mascotaData.nombre });

    const usuario = await Usuario.findOne({ username });
    
    if (!usuario) {
        const error = new Error("Usuario no encontrado");
        error.status = 404;
        throw error;
    }

    if (mascotaBuscada) {
        const error = new Error("La mascota ya existe");
        error.status = 400;
        error.details = { mascotaData };
        throw error;
    }

    if (usuario.plan === "PLUS"){
        const mascotasCount = await Mascota.countDocuments({ propietario: usuario._id });
        if (mascotasCount >= 4) {
            const error = new Error("El usuario PLUS no puede tener más de 4 mascotas");
            error.status = 403;
            throw error;
        }
    }

    const mascota = new Mascota({...mascotaData, propietario: usuario._id});
    await mascota.save();
    return mascota;
};

export const eliminarMascotaService = async (id) => {
    const mascota = await Mascota.findByIdAndDelete(id);
    if (!mascota) {
    const error = new Error("Mascota no encontrada");
    error.status = 404;
    throw error;
}
    return mascota;
}


export const actualizarMascotaService = async (id, mascotaData) => {
    const mascota = await Mascota.findByIdAndUpdate(id, mascotaData, { returnDocument: "after" });
    
    if (!mascota) {
    const error = new Error("Mascota no encontrada");
    error.status = 404;
    throw error;
    }
    return mascota;
};

export const obtenerMascotasService = async (limit, page) => {
    limit = Number(limit) || 3;
    page = Number(page) || 1;
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(await Mascota.countDocuments() / limit);
    const mascotas = await Mascota.find().skip(skip).limit(limit).populate("propietario");
    return {mascotas, limit, page, totalPages};
};

export const obtenerMascotaPorRazaService = async (raza) => {
    const mascotas = await Mascota.find({ raza });
    if (mascotas.length === 0) {
        const error = new Error("Mascota no encontrada");
        error.status = 404;
        throw error;
    }
    return mascotas;
}

export const obtenerMascotaPorEdadService = async (edad) => {
    const mascotas = await Mascota.find({ edad });
    if (mascotas.length === 0) {
        const error = new Error("Mascota no encontrada");
        error.status = 404;
        throw error;
    }
    return mascotas;
}
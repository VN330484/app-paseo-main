import { crearMascotaService,eliminarMascotaService, 
    actualizarMascotaService,obtenerMascotasService, obtenerMascotaPorRazaService,
obtenerMascotaPorEdadService } from "../services/mascota.services.js";



export const crearMascota = async (req, res) => {

    const mascota = await crearMascotaService(
        req.validatedBody,
        req.decoded.usuario
    );

    res.status(201).json(mascota);
};

export const eliminarMascota = async (req, res) => {
    const { id } = req.validatedParams;
    const mascota = await eliminarMascotaService(id);
    res.json(mascota);
    res.status(200).json({ message: "Mascota eliminada correctamente" });
};

export const actualizarMascota = async (req, res) => {
    const { id } = req.params;
    const mascota = await actualizarMascotaService(id, req.validatedBody);
    res.status(200).json({
        message: "Mascota actualizada correctamente",
        mascota
    });
};

export const obtenerMascotas = async (req, res) => {
    const { limit , page } = req.query;
    const mascotas = await obtenerMascotasService(limit,page);
    res.json(mascotas);
};

export const obtenerMascotaPorRaza = async (req, res) => {
    const { raza} = req.params;
    const mascota = await obtenerMascotaPorRazaService(raza);
    res.json(mascota);
}

export const obtenerMascotaPorEdad = async (req, res) => {
    const { edad} = req.params;
    const mascota = await obtenerMascotaPorEdadService(edad);
    res.json(mascota);
}


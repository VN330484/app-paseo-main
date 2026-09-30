import Categoria from '../models/categoria.model.js';
import Reserva from '../models/reserva.model.js';
import { generarDescripcionCategoria } from "./groq.services.js";



export const crearCategoriaService = async (categoriaData) => {

    const categoriaBuscada = await Categoria.findOne({
        nombre: categoriaData.nombre
    });

    if (categoriaBuscada) {
        const error = new Error("La categoría ya existe");
        error.status = 400;
        error.details = { categoriaData };
        throw error;
    }

    let descripcionIA = categoriaData.descripcion;

    try {

        descripcionIA = await generarDescripcionCategoria(
            categoriaData.nombre
        );

    } catch (error) {

        console.log(
            "Groq no disponible. Se continúa sin descripción generada."
        );

        descripcionIA =
            categoriaData.descripcion ||
            "Descripción no disponible";

    }

    console.log("categoriaData:", categoriaData);
console.log("descripcionIA:", descripcionIA);


    const categoria = new Categoria({...categoriaData, descripcion: descripcionIA
    });

    await categoria.save();

    return categoria;
};



export const eliminarCategoriaService = async (id) => {

    const reservaAsociada = await Reserva.findOne({
        categoria: id
    });

    if (reservaAsociada) {
        const error = new Error(
            "No se puede eliminar la categoría porque tiene reservas asociadas"
        );

        error.status = 409;

        throw error;
    }

    const categoria = await Categoria.findByIdAndDelete(id);

    if (!categoria) {
        const error = new Error("Categoria no encontrada");
        error.status = 404;
        throw error;
    }

    return categoria;
};

export const actualizarCategoriaService = async (id, categoriaData) => {
    const categoria = await Categoria.findByIdAndUpdate(id, categoriaData, { returnDocument: "after" });
    
    if (!categoria) {
    const error = new Error("Categoría no encontrada");
    error.status = 404;
    throw error;
    }
    return categoria;
};


export const obtenerCategoriaPorIdService = async (id) => {
    const categoria = await Categoria.findById(id);
    if (!categoria) {
        const error = new Error("Categoría no encontrada");
        error.status = 404;
        throw error;
    }
    return categoria;
};

export const obtenerCategoriasService = async (limit, page) => {
    limit = Number(limit) || 3;
    page = Number(page) || 1;
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(await Categoria.countDocuments() / limit);
    const categorias = await Categoria.find().skip(skip).limit(limit);
    return { categorias, limit, page, totalPages };
};
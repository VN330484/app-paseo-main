import { crearCategoriaService, eliminarCategoriaService,actualizarCategoriaService,
obtenerCategoriaPorIdService,
obtenerCategoriasService
 } from '../services/categoria.services.js';

export const crearCategoria = async (req, res) => {

    const categoria = await crearCategoriaService(
        req.validatedBody,
        req.decoded.usuario
    );

    res.status(201).json(categoria);
};

export const eliminarCategoria = async (req, res) => {
    const { id } = req.validatedParams;
    const categoria = await eliminarCategoriaService(id);
    res.json(categoria);
    res.status(200).json({ message: "Categoría eliminada correctamente" });
};

export const actualizarCategoria = async (req, res) => {
    const { id } = req.params;
    const categoria = await actualizarCategoriaService(id, req.validatedBody);
    res.status(200).json({
        message: "Categoría actualizada correctamente",
        categoria
    });
};


export const obtenerCategoriaPorId = async (req, res) => {
    const { id } = req.params;
    const categoria = await obtenerCategoriaPorIdService(id);
    res.json(categoria);
};

export const obtenerCategorias = async (req, res) => {
    const { limit , page } = req.query;
    const categorias = await obtenerCategoriasService(limit,page);
    res.json(categorias);
};
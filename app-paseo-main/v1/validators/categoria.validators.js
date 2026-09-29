import Joi from 'joi';
export const categoriaServicioSchema = Joi.object({

    nombre: Joi.string()
        .min(3)
        .max(50)
        .required(),

    descripcion: Joi.string()
        .min(5)
        .max(255)
        .required(),

    precio: Joi.number()
        .min(0)
        .required(),

    duracion: Joi.number()
        .integer()
        .min(1)
        .required()
});

export const actualizarCategoriaSchema = Joi.object({
    nombre: Joi.string()
        .min(3)
        .max(50)
        .optional(),

    descripcion: Joi.string()
        .min(5)
        .max(255)
        .optional(),

    precio: Joi.number()
        .min(0)
        .optional(),

    duracion: Joi.number()
        .integer()
        .min(1)
        .optional()
});

export const categoriaIdParamSchema = Joi.object({
id: Joi.string().length(24).required()
});
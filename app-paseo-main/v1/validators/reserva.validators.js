import Joi from "joi";

export const reservaSchema = Joi.object({

    mascota: Joi.string()
        .length(24)
        .required()
        .messages({
            "string.length": "El id de la mascota debe tener 24 caracteres",
            "any.required": "La mascota es obligatoria"
        }),

    categoria: Joi.string()
        .length(24)
        .required()
        .messages({
            "string.length": "El id de la categoria debe tener 24 caracteres",
            "any.required": "La categoria es obligatoria"
        }),

    fecha: Joi.date()
        .required()
        .messages({
            "date.base": "La fecha no es válida",
            "any.required": "La fecha es obligatoria"
        })

});
``
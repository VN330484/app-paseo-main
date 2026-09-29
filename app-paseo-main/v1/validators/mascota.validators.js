import Joi from 'joi';

export const mascotaSchema = Joi.object({
  nombre: Joi.string().min(1).max(50).required().messages({
    'string.empty': 'El nombre de la mascota no puede estar vacío',
    'any.required': 'El nombre de la mascota es obligatorio',
  }),
  raza: Joi.string().min(1).max(50).required().messages({
    'string.empty': 'La raza de la mascota no puede estar vacía',
    'any.required': 'La raza de la mascota es obligatoria',
  }),
  edad: Joi.number().integer().min(0).required().messages({
    'number.min': 'La edad de la mascota debe ser un número positivo',
    'any.required': 'La edad de la mascota es obligatoria',
  }),
  fotoUrl: Joi.string().uri().optional()
});


export const mascotaIdParamSchema = Joi.object({
id: Joi.string().length(24).required()
});

export const actualizarMascotaSchema = Joi.object({
  nombre: Joi.string().trim().min(2).max(50),
  raza: Joi.string().trim().max(50),
  edad: Joi.number().min(0),
  fotoUrl: Joi.string().uri()
}).min(1).messages({
  'object.min': 'Debe enviar al menos un campo para actualizar',
});

export const mascotaEdadParamSchema = Joi.object({
    edad: Joi.number().integer().required().messages({
        "number.base": "La edad debe ser un número",
        "any.required": "La edad es obligatoria"
    })
});
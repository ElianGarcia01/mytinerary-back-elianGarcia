import joi from "joi-oid"

const schemaSignUp = joi.object({
  name: joi.string().required().messages({
    "string.base": "El name debe ser un texto",
    "any.required": "El name es requerido",
  }),
  email: joi.string().email().required().messages({
    "string.email": "El email debe tener un formato válido",
    "any.required": "El email es requerido",
  }),
  password: joi.string().min(6).required().messages({
    "string.base": "El password debe ser una cadena de texto",
    "string.min": "El password debe tener al menos 6 caracteres",
    "any.required": "El password es requerido",
  }),
  photo: joi.string().uri().required().messages({
    "string.uri": "El photo debe ser una URL válida",
    "any.required": "El photo es requerido",
  }),
  country: joi.string().optional().messages({
    "string.base": "El country debe ser un texto",
  }),
  verified: joi.boolean().optional().messages({
    "boolean.base": "Verified debe ser verdadero o falso",
  }),
  favorites: joi.array().items(joi.objectId()).optional().messages({
    "array.base": "Favorites debe ser un arreglo de IDs válidos",
    "string.pattern.name": "Cada favorite debe ser un ObjectId válido",
  }),
})

export default schemaSignUp

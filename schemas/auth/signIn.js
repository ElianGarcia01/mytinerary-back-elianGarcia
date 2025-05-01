import joi from "joi-oid"

const schemaSignIn = joi.object({
  email: joi.string().email().required().messages({
    "string.email": "El email debe tener un formato válido",
    "any.required": "El email es requerido",
  }),
  password: joi.string().min(6).required().messages({
    "string.base": "El password debe ser una cadena de texto",
    "string.min": "El password debe tener al menos 6 caracteres",
    "any.required": "El password es requerido",
  }),
})

export default schemaSignIn
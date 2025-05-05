// schemas/auth/googleAuth.js
import joi from "joi-oid";

const schemaGoogleAuth = joi.object({
  token: joi.string().required().messages({
    "string.base": "El token debe ser un texto",
    "any.required": "El token de Google es requerido",
  })
});

export default schemaGoogleAuth;
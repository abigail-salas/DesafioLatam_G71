const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const Authorization = req.header("Authorization");

    /* Verificando que la autorizacion exista */
    if (!Authorization) {
      throw { code: 400, message: "Token no proporcionado" };
    }

    /* Extraer el token de "Bearer" */

    const token = Authorization.split("Bearer ")[1];

    if (!token) {
      throw { code: 400, message: "Formato de Token Invalido" };
    }

    /* Verificamos si el token es valido */

    jwt.verify(token, "clave_secreta", (err, payload) => {
      if (err) {
        throw { code: 401, message: "Token Invalido" };
      }

      req.user = payload;

      next();
    });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ error: error.message || "Error de autenticacion" });
  }
};

module.exports = authMiddleware;

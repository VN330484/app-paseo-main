export const adminMiddleware = (req, res, next) => {

    console.log("ADMIN MIDDLEWARE EJECUTADO");
    console.log(req.decoded);

    if (req.decoded.perfil !== "ADMIN") {
        return res.status(403).json({
            message: "Acceso denegado. Solo administradores."
        });
    }

    next();
};
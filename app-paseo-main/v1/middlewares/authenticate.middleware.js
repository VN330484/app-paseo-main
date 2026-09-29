import jwt from 'jsonwebtoken';
const SECRET_KEY = 'mi_clave_secreta';


export const authenticateMiddleware = (req, res, next) => {

    
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'No se proporcionó el token' });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token inválido' });
    }
    
        jwt.verify(token, SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Token inválido' });
            }
            
            req.decoded = decoded;
            next();
        });
    
};
import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    perfil: { type: String, required: true,enum: ["USUARIO", "ADMIN"], default: 'usuario' },
    plan: { type: String, required: true, enum: ["PLUS", "PREMIUM"], default: 'plus' }
});

const Usuario = mongoose.model("Usuario", usuarioSchema);

export default Usuario;
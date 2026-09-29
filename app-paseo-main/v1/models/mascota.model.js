import mongoose from "mongoose";

const mascotaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  raza: {
    type: String,
  },
  edad: {
    type: Number,
  },
  fotoUrl: {
    type: String
  },
  propietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
  }
});

const Mascota = mongoose.model("Mascota", mascotaSchema,"mascotas");

export default Mascota;
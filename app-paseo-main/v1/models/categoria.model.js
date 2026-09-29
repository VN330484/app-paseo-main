import mongoose from "mongoose";

export const categoriaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  duracion: {
    type: Number,
    required: true,
    min: 1,
  }
});

const Categoria = mongoose.model("Categoria", categoriaSchema,"categorias");

export default Categoria;
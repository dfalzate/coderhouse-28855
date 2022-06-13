import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  nombres: {
    type: String,
    required: true,
    max: 100,
  },
  apellidos: {
    type: String,
    required: true,
    max: 100,
  },
  email: {
    type: String,
    max: 100,
  },
  usuario: {
    type: String,
    required: true,
    max: 100,
  },
  password: {
    type: Number,
    required: true,
  },
});

export const UsuariosModel = mongoose.model("Usuarios", Schema);

const { Schema, model } = require("mongoose");

const terapeutaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    telefono: { type: Number, required: true },
    password: { type: String, required: true },
    cedula: { type: String, required: true, unique: true },
    especializacion: { type: String, required: true},
    descripcion: { type: String, required: true }  
  },
  { timestamps: true }
);

module.exports = model("terapeuta", terapeutaSchema);

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  nombre: { type: String, required: true },
  id_terapeuta: {type: String},
  correo: { type: String, required: true, unique: true },
  telefono: { type: Number, required: true },
  contacto1:{ type: String, },
  contacto2:{ type: String, },
  tel_contacto1:{ type: String },
  tel_contacto2:{ type: String },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isDoctor: { type: Boolean, default: false },
});

module.exports = model("usuario", userSchema);

const {Schema, model} = require('mongoose');

const sesionSchema = new Schema({
    id_usuario: {type: String},
    id_terapeuta: {type: String},
    id_fecha: {type: String},
    link: {type: String},
    aceptado: {type: Boolean}
},{
  timestamps: true
});

module.exports = model('sesion', sesionSchema);


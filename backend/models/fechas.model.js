const { Schema, model } = require('mongoose');

const fechas = new Schema({
    id_terapist: {type: String, required: true},
    fecha: {type: Date, required: true}
},{
    timestamps: true
})

module.exports = model('fechas', fechas);

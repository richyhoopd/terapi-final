const { Schema, model } = require("mongoose");


const messageSchema = new Schema({
    message: {
        type: String,
        required: true
    },
   
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = model('message', messageSchema)
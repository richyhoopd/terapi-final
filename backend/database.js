const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

const URI = process.env.MONGODB_URL;

mongoose.connect(URI);

const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("La base de datos de lanzó en el puerto " + URI);
});

const express = require('express');
const cors = require('cors');
// const cloudinary = require("cloudinary").v2;
// const fileUpload = require("express-fileupload");
const app = express();
const dotenv = require('dotenv');


/*      Configuración     */
//Asignación del puerto del servidor
app.set('port', process.env.PORT || 4001);

/*       Middlewares       */
//Activar dotenv
dotenv.config()
//Activar cors
app.use(cors());
app.use(cors({ origin: true }));
//activar JSON y uso de archivos
app.use(express.json());
// app.use(fileUpload({
//     useTempFiles: true,
//     limits: {fileSize: 50 * 2024 * 1024}
// }))

//Configuracion de Cloudnary
// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_NAME
//                 ? process.env.CLOUDINARY_NAME
//                 : 'dzajaf1mv', 
//     api_key: process.env.CLOUDINARY_API_KEY
//                 ? process.env.CLOUDINARY_API_KEY
//                 : '414987381238598', 
//     api_secret: process.env.CLOUDINARY_SECRET 
//                 ? process.env.CLOUDINARY_SECRET
//                 : '9gnctjNZf5N3hGdIkwKej-4w5-A'
//   });

/*      Ruta        */
app.get('/', (req, res)=>{
    res.send("Backend");
});

/*      Rutas del API       */
app.use('/api/usuario', require('./routes/user.routes'));
app.use('/api/terapeuta', require('./routes/terapist.routes'));
app.use('/api/sesion', require('./routes/sesion.routes'))

app.use('/fecha', require('./routes/fechas.routes'));

module.exports = app;
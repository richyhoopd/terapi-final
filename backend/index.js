require('dotenv').config;
require('./database');

const app = require('./app');

async function main(){
    await app.listen(app.get('port'));
    console.clear();
    console.log('El servidor fue lanzado en el puerto ' + app.get('port'))
}

main();
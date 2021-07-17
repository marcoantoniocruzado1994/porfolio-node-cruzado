const app = require('./app');
//TODO: Variables de entorno
require('dotenv').config();
//TODO:conexion base de datos
require('./db/database');





//TODO: inicializacion del servidor
app.listen(app.get('port'),()=>{
    console.log("Server on port" ,app.get('port') );
})

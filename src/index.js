const app = require('./app');
//TODO: Variables de entorno
//TODO:conexion base de datos
require('./db/database');





//TODO: initialization del servidor
app.listen(app.get('port'))
console.log("Server on port", app.get('port') );


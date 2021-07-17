const app = require('./app');

//TODO:conexion base de datos






//TODO: inicializacion del servidor
app.listen(app.get('port'),()=>{
    console.log("Server on port" ,app.get('port') );
})

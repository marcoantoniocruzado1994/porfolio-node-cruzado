const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const app = express();



//TODO: configuraciones
app.set('port',process.env.PORT || 3000);
app.set('views', path.join(__dirname,'/views'));
app.set('view engine', 'ejs' );


//TODO:middleawares
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(morgan('dev'));

//TODO: rutas
app.use('/api',require('./routes/index.routes'));

//TODO: archivos estaticos
app.use(express.static(path.join(__dirname,'/public')));

//TODO:exprtando el modulo app
module.exports = app;
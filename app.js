const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const ejs = require('ejs');
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
app.get('/',(req,res)=>{
    res.render('pages/informationPersonal')
})
//TODO: archivos estaticos

//TODO:exprtando el modulo app
module.exports = app;
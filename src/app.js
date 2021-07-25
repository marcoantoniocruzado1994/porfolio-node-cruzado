//TODO: Variables de entorno
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs')
const path = require('path');
const del = require('eliminate');
const { google } = require('googleapis');
const app = express();
const Skills = require('./models/Skills')

/* TODO:configuracion de Google Drive */
const CLIENTE_ID = process.env.CLIENTE_ID;
const CLIENTE_SECRET = process.env.CLIENTE_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oauth2Client = new google.auth.OAuth2(
    CLIENTE_ID,
    CLIENTE_SECRET,
    REDIRECT_URI
);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
});



//TODO: mlkter configuracion
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/images'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
//TODO: configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


//TODO:middleawares
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(multer({
    storage: storage,
    dest: path.join(__dirname, 'public/images')
}).single('fileImage'));

//TODO: rutas
app.use(require('./routes/index.routes'));
app.post('/skills', async (req, res) => {
    //TODO: funciones
    const { descriptionImagen } = req.body
    const { filename, mimetype } = req.file

    //TODO: funtion subir imagen
    async function subirImagen() {
        try {
            const response = await drive.files.create({
                requestBody: {
                    name: `${filename}`,
                    mimeType: `${mimetype}`
                },
                media: {
                    mimeType: `${mimetype}`,
                    body: fs.createReadStream(path.join(__dirname + `/public/images/${filename}`))
                }
            })
            return response.data.id;
        } catch (error) {
            console.log(error.message);
        }
    }
    //TODO: funtion traer urls
    async function generarUrl(id) {
        try {

            const fileId = `${id}`
            await drive.permissions.create({
                fileId: fileId,
                requestBody: {
                    role: 'reader',
                    type: 'anyone'
                }
            })

            const result = await drive.files.get({
                fileId: fileId,
                fields: 'webViewLink, webContentLink'
            })

            return result.data

        } catch (error) {
            console.log(error.message);
        }



    }
    const id = await subirImagen();
    const urlImages = await generarUrl(id)
    await del(path.join(__dirname + `/public/images/${filename}`));
    const linkImages = urlImages.webViewLink
    const newSkill = new Skills({
        descriptionImagen: descriptionImagen,
        linkImages: linkImages
    })
    const skills = await newSkill.save();
    res.redirect('/skills');
})

//TODO: archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

//TODO:exprtando el modulo app
module.exports = app;
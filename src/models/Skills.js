const {Schema , model } = require('mongoose')


const skillsSchema = new Schema({
    descriptionImagen: String,
    linkImages:String,
    date: { type: Date, default: Date.now },
})

module.exports = model('Skills',skillsSchema);
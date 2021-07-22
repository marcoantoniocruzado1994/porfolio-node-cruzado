const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/api-portafolio',{
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false
},()=>{
    console.log("Connection  MongoDb Success");
})
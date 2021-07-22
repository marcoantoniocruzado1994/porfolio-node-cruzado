const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://marco:marco@cluster0.rqfqx.mongodb.net/portafolio-demo?retryWrites=true&w=majority',{
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false
},()=>{
    console.log("Connection  MongoDb Success");
})
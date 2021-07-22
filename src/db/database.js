const mongoose = require('mongoose');


mongoose.connect(process.env.URL_DATABASE,{
useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false
},()=>{
    console.log("Connection  MongoDb Success ready");
})
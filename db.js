const mongoose=require("mongoose");
var mongoURL='mongodb+srv://suraj491:prakashsp@nodeapi.7mjav.mongodb.net/mern-pizza'
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})
var db=mongoose.connection
db.on('connected',()=>{
    console.log('Mongo DB Connection successfull');
})
db.on('error',()=>{
    console.log('Mongo DB Connection failed');
})
module.exports=mongoose
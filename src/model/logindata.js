const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;

const LoginSchema =new Schema({
    
    email:String,
    password:String
    
    
});

 var Logindata=mongoose.model('logindata',LoginSchema);

 module.exports=Logindata;
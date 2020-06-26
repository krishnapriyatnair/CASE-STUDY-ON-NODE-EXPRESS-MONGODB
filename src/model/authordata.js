const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');
const Schema=mongoose.Schema;

const AuthorSchema =new Schema({
    name:String,
    image:String,
    works:String,
    awards:String,
    bio:String,
    link:String
});

 var Authordata=mongoose.model('authordata',AuthorSchema);

 module.exports=Authordata;
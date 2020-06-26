const express=require('express');
const publishRouter=express.Router();
const Bookdata=require('../model/bookdata');
const nav1=[
  {link:'/adminhome',name:'Home'},
  {link:'/books',name:'Books'},
  {link:'/journals',name:'Journals'},
  {link:'/author',name:'Authors'},
  {link:'/admin',name:'Add Book'},
  {link:'/adminauthor',name:'Add Author'},
  {link:'/signUp',name:'SignUp'},
  {link:'/adminlogin',name:'Adminlogin'},
  {link:'/',name:'Login'}
];
function router(nav)
{
    publishRouter.get('/',function(req,res){
    res.render("publish", {
        nav1,
        title:'Add a new book',
        
    });
});

publishRouter.post('/add',function(req,res){
  var item={
    title: req.body.title,
    author:req.body.author,
    genre: req.body.genre,
    image:req.body.image,
    link:req.body.link
  }
  var book= Bookdata(item);
  book.save();
  res.redirect('/books');

});




return publishRouter;
}
module.exports=router;
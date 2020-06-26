const express=require('express');
const addauthorRouter=express.Router();
const Authordata=require('../model/authordata');


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
    addauthorRouter.get('/',function(req,res){
    res.render("addauthor", {
        nav1,
        title:'Add a new Author',
        
    });
});

addauthorRouter.post('/add',function(req,res){
  var item={
    
    name:req.body.name,
    image:req.body.image,
    works:req.body.works,
    awards:req.body.awards,
    bio:req.body.bio,
    link:req.body.link
  }
  var author= Authordata(item);
  author.save();
  res.redirect('/author');

});


addauthorRouter.get('/delete/:id',function(req,res){
  const id= req.params.id;
  
  Authordata.remove({_id:id})
  .then(function(author){
      res.redirect('/author');
  })
  });
return addauthorRouter;
}
module.exports=router;
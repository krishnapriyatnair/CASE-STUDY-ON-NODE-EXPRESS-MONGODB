const express=require('express');
const updateauthorRouter=express.Router();
const Authordata=require('../model/authordata');

function router(nav)
{
  
    updateauthorRouter.get('/edit/:id',function(req,res){
      const id= req.params.id;
      Authordata.findOne({_id:id})
      .then(function(author)
      {
        res.render("updateauthor", {
          nav,
          title:'Update Author',
          author
       
      });
      
  });
      
});
  
updateauthorRouter.post('/:id',function(req,res){
  var name=req.body.name;
  var image=req.body.image;
  var works=req.body.works;
  var  awards=req.body.awards;
  var  bio=req.body.bio;
  var link=req.body.link;
  
  const id= req.body.id;
  Authordata.updateOne({_id:id},{$set:{name:name,works:works,awards:awards,image:image,link:link}})
 .then(function(author){
  res.redirect('/author');
 });

 
}); 

  

return updateauthorRouter;
}
module.exports=router;
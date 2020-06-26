const express=require('express');
const updateRouter=express.Router();
const Bookdata=require('../model/bookdata');

function router(nav)
{
  
    updateRouter.get('/edit/:id',function(req,res){
      const id= req.params.id;
      Bookdata.findOne({_id:id})
      .then(function(book)
      {
        res.render("update", {
          nav,
          title:'Update book',
          book
       
      });
      
  });
      
});
  
updateRouter.post('/:id',function(req,res){
  var  title= req.body.title;
  var author=req.body.author;
  var genre= req.body.genre;
  var image=req.body.image;
  var link=req.body.link;
  
  const id= req.body.id;
 Bookdata.updateOne({_id:id},{$set:{title:title,author:author,genre:genre,image:image,link:link}})
 .then(function(books){
  res.redirect('/books');
 });

 
}); 

  

return updateRouter;
}
module.exports=router;
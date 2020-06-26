const express=require('express');
const booksRouter=express.Router();
const Bookdata=require('../model/bookdata');





function router(nav)
{ 

booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render("books", {
            nav,
            title:'Library',
            books
        });
    })
    
});
booksRouter.get('/:id',function(req,res){
   const id= req.params.id;
    Bookdata.findOne({_id:id})
    .then(function(book){

        res.render('book', {
            nav,
            title:'Library',
            book        
        });

    });
    
});
booksRouter.get('/delete/:id',function(req,res){
    const id= req.params.id;
    
    Bookdata.remove({_id:id})
    .then(function(book){
        res.redirect('/books');
    })
    });



    
  

return booksRouter;
}
module.exports=router;
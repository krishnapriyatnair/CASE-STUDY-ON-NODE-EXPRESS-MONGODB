
const express=require('express');
const loginRouter=express.Router();
const Signupdata=require('../model/signupdata');
const Logindata=require('../model/signupdata');

function router(nav)
{ 
var caro=[{
    
    img:"pr_library.jpg",
    des:'At your figure tips'
},
{
    
    img:"kindle.jpg",
    des:'Read Anywhere at Anytime'

},
{
    img:"booksopen.jpg",
    des:'Discover the world of books'
}

];

loginRouter.get('/',function(req,res){
    res.render("login", {
        nav,
        title:'Login',
        caro
    });
     
});




loginRouter.post('/validate',function(req,res){

    
    var email=req.body.email;
    var password=req.body.password;
    Signupdata.findOne({email: email,password: password})
    .then(function(docs){
        if(docs==null){
            console.log("email and password not found");
            res.status(400).send('email and password not found');
           return  res.redirect('/');
        }

   else{
    res.redirect('/home');
   }
  
    });

});


return loginRouter;
}


module.exports=router;


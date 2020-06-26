const express=require('express');
const signupRouter=express.Router();
const Signupdata=require('../model/signupdata');
function router(nav)
{
signupRouter.get('/',function(req,res){
    res.render("signup", {
        nav,
        title:'SignUp',
        
    });
});

signupRouter.post('/add',function(req,res){
    var item={
      
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        pin:req.body.pin
    }
    
        var email=req.body.email;
        var firstname=req.body.firstname;
         var username=req.body.username;
        Signupdata.findOne({username: username,email: email,firstname:firstname})
        .then(function(docs){
            if(docs==null){
                var details= Signupdata(item);
                details.save();
                res.redirect('/');
            }
    
       else{
        res.send("Username and Email already available");
     return res.redirect('/signUp');
    
       }
      
        });
    
    });
    
    
  

  
  



return signupRouter;
}
module.exports=router;
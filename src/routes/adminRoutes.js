
const express=require('express');
const adminRouter=express.Router();
const Signupdata=require('../model/signupdata');
const Logindata=require('../model/signupdata');

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


    adminRouter.get('/',function(req,res){
    res.render("adminlogin", {
        nav,
        title:'AdminLogin',
    
    });
});


adminRouter.get('/adminhome',function(req,res){
    res.render("adminhome", {
        nav1,
        title:'Home',
        
    });
});








return adminRouter;
}


module.exports=router;


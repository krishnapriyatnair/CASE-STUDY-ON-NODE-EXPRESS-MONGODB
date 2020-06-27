const express=require('express');
const app=express();
const nav=[
    {link:'/home',name:'Home'},
    {link:'/books',name:'Books'},
    {link:'/journals',name:'Journals'},
    {link:'/author',name:'Authors'},
    // {link:'/admin',name:'Add Book'},
    // {link:'/adminauthor',name:'Add Author'},
    {link:'/signUp',name:'SignUp'},
    {link:'/adminlogin',name:'Adminlogin'},
    {link:'/',name:'Login'}
];
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

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorRouter=require('./src/routes/authorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const journalsRouter=require('./src/routes/journalsRoutes')(nav);
const faqRouter=express.Router();
const publishRouter=require('./src/routes/publishRoutes')(nav);
const updateRouter=require('./src/routes/updateRoutes')(nav);
const addauthorRouter=require('./src/routes/addauthorRoutes')(nav);
const updateauthorRouter=require('./src/routes/updateauthorRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));



app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books', booksRouter);
app.use('/author', authorRouter);
app.use('/', loginRouter);
app.use('/signup', signupRouter);
app.use('/journals', journalsRouter);
app.use('/faq', faqRouter);
app.use('/admin', publishRouter);
app.use('/update', updateRouter);
app.use('/adminauthor', addauthorRouter);
app.use('/updateauthor', updateauthorRouter);
app.use('/adminlogin', adminRouter);
// app.use('/adminhome', adminRouter);



app.get('/home',function(req,res){
    res.render("home",
    {
        nav,
        title:'Home'
    }
    
    );
});
app.get('/adminhome',function(req,res){
    res.render("adminhome", {
        nav1,
        title:'Home',
        
    });
});




    faqRouter.get('/',function(req,res){
        res.render("faq",
        {
            nav,
            title:'faq'
        }
        
        );

});







app.listen(5003);
console.log("Loading server 5003");

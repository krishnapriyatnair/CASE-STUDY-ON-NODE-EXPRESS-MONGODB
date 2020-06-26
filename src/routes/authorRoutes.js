const express=require('express');
const authorRouter=express.Router();
const Authordata=require('../model/authordata');
const nav=[
    {link:'/home',name:'Home'},
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
// var authors=[{
//     name:'Arundhati Roy',
//     img:"Arundhati Roy.jpg",
//     works:"The God of Small Things",
//     awards:"Man Booker Prize (1997),Sydney Peace Prize (2004)",
//     bio:"Arundhati Roy is the author of The God of Small Things, which won the Booker Prize in 1997 and has been translated into more than forty languages, and The Ministry of Utmost Happiness, which was long-listed for the Man Booker Prize 2017.",
//     link:'https://en.wikipedia.org/wiki/Arundhati_Roy'
// },
// {
//     name:'Diana Gabaldon',
//     img:"Diana Gabaldon.jpg",
//     works:"Science Software Quarterly,Outlander series,Lord John series",
//     awards:"Goodreads Choice Awards Best Romance",
//     bio:"Diana Gabaldon is the author of the international bestselling Outlander novels and Lord John Grey series.Diana lives in Scottsdale, Arizona and is currently at work on her ninth Outlander novel.",
//     link:'https://en.wikipedia.org/wiki/Diana_Gabaldon'
// },
// {
//     name:'R.K. Narayan',
//     img:"RKNarayan.jpg",
//     works:"Swami and Friends ,The English Teacher,Waiting for the Mahatma",
//     awards:"Filmfare Award for Best Story, Padma Bhushan, Padma Vibhushan",
//     bio:"R.K. Narayan's fwas an Indian writer known for his work set in the fictional South Indian town of Malgudi. He was a leading author of early Indian literature in English.In 1958 Narayan’s work The Guide won him the National Prize of the Indian Literary Academy, his country’s highest literary honor.In 1980 he was awarded the A.C. Benson Medal by the Royal Society of Literature and in 1982 he was made an Honorary Member of the American Academy and Institute of Arts and Letters.",
//     link:'https://en.wikipedia.org/wiki/R._K._Narayan'
// },

// {
//     name:'Dr Peter John Bentley',
//     img:"peterbentley.jpg",
//     works:"The Undercover Scientist: Investigating the Mishaps of Everyday Life",
//     awards:"Edge of Computation Prize Nominee (2005),Scientific career",
//     bio:"Professor Peter Bentley is one of the most creative thinkers in computer science, working with scientists of all different disciplines to model virtual experiments. He is Honorary Senior Research Fellow at the Department of Computer Science, University College London and is known for his prolific research covering all aspects of Evolutionary Computation and Digital Biology. He is the author of the popular science books The Book of Numbers (Cassell Illustrated), Digital Biology (Simon and Schuster USA), and the academic books The PhD Application Handbook, Evolutionary Design by Computers, Creative Evolutionary Systems and On Growth, Form and Computers.",
//     link:'https://en.wikipedia.org/wiki/Peter_J._Bentley'
// }


// ];

authorRouter.get('/',function(req,res){
    Authordata.find()
    .then(function(authors){
    res.render("authors", {
        nav,
        title:'Library',
        authors
    });
});
});
authorRouter.get('/:i',function(req,res){
   const id= req.params.i
   Authordata.findOne({_id:id})
    .then(function(author){ 
    res.render('author', {
        nav,
        title:'Author',
        author       
    });
});
});


authorRouter.get('/delete/:id',function(req,res){
    const id= req.params.id;
    
    Authordata.remove({_id:id})
    .then(function(author){
        res.redirect('/author');
    })
    });

return authorRouter;
}
module.exports=router;
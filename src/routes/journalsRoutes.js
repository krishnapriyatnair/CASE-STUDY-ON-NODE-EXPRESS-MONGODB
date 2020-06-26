const express=require('express');
const journalsRouter=express.Router();
function router(nav)
{ 
var journals=[{
    title:'Science direct',
    genre:"AASRI Procedia",
    link:'https://www.sciencedirect.com/journal/aasri-procedia'
},
{
    title:'DOAJ',
    genre:"Directory of Open Access Journals",
    link:'https://doaj.org/'

},
{
    title:'IEEE',
    genre:"IEEE Journals and Magazines",
    link:'https://spectrum.ieee.org/'

},

{
    title:'JSTOR',
    genre:"Data for Research",
    link:'https://www.jstor.org/dfr/?cid=dsp_j_dfr_01_2018&utm_source=jstor&utm_medium=display&utm_campaign=home_right_jstor_dfr'

},
{
    title:'Springer',
    genre:"International Journal on Digital Libraries",
    link:'https://www.springer.com/journal/799'

},
{
    title:'IJCIR',
    genre:"International Journal of Computational Intelligence Research",
    link:'https://www.ripublication.com/ijcir.htm'

}


];

journalsRouter.get('/',function(req,res){
    res.render("journals", {
        nav,
        title:'Journals',
        journals
    });
});


return journalsRouter;
}
module.exports=router;
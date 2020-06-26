
function validate()
{
let user=document.getElementById("exampleInputEmail1");
let pass=document.getElementById("exampleInputPassword1");
let label=document.getElementById("check");

     if(user.value=="admin"|| pass.value=="1234")
     {
        label.style.visibility="visible";
        label.innerHTML="valid";
        label.style.color="green";
       
        return true;
     }
     else{
        alert("Only admin can login.")
        label.style.visibility="visible";
        label.innerHTML="invalid";
        label.style.color="red";
        return false;
     }
         
    }    

     

    







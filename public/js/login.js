


function validate()
{
let user=document.getElementById("exampleInputEmail1");
let pass=document.getElementById("exampleInputPassword1");
let label=document.getElementById("check");
let  regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
let regexpemail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if(user.value.trim()==""|| pass.value.trim()=="")
     {
         alert("Please fill Empty fields.")
         label.style.visibility="visible";
         label.innerHTML="invalid";
         label.style.color="red";
         return false;
     }
     
     else if (!regexpemail.test(user.value))
      {
      alert('Please provide a valid email address');
     return false;
     }
     else if (!regexp.test(pass.value))
      {
         label.style.visibility="visible"
         label.innerHTML="Please provide a valid password with atleast one number,one small letter and one capital letter.";
     return false;
     }

     
      else if(user.value.match(regexpemail) && pass.value.match(regexp)&& pass.value.length>=6){
      
        label.style.visibility="visible";
        label.innerHTML="valid";
        label.style.color="green";
       
        return true;
     }
       
      else{

         alert("Password too short.Minimum 6 characters required");
        label.style.color="red";
        return false;  
      
     }
 

}







function validate()
{
let user=document.getElementById("exampleInputEmail1");
let pass=document.getElementById("exampleInputPassword1");
let add=document.getElementById("inputAddress");
let city=document.getElementById("inputCity");
let zip=document.getElementById("inputZip");

  
     let label=document.getElementById("checkemail");
     let labelpass=document.getElementById("checkpass");
     let  regexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
     let regexpemail=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if(user.value==""|| pass.value=="" || add.value==""||city.value==""||zip.value=="")
     {
          alert("Please fill Empty fields.")
         return false;
     }
     else if (!regexpemail.test(user.value))
      {
      alert('Please provide a valid email address');
      label.style.visibility="visible";
      label.innerHTML="invalid emailid";
      label.style.color="red";
     return false;
     }
     else if (!regexp.test(pass.value))
      {
        labelpass.style.visibility="visible";
         labelpass.innerHTML="Please provide a valid password with atleast one number,one small letter and one capital letter.";
         labelpass.style.color="red";
         return false;
     }

     
      else if(user.value.match(regexpemail) && pass.value.match(regexp)&& pass.value.length>=6){
      
        label.style.visibility="visible";
        label.innerHTML="valid";
        label.style.color="green";
        labelpass.style.visibility="visible";
        labelpass.innerHTML="valid";
        labelpass.style.color="green";
       
        return true;
     }
       
      else{

         alert("Password too short.Minimum 6 characters required");
        label.style.color="red";
        return false;  
      
     }
 

}







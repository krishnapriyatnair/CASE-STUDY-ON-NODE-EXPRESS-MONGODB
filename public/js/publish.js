function submission(){

    let booktitle=document.getElementById("booktitle");
let bookauthor=document.getElementById("bookauthor");
let bookgener=document.getElementById("bookgener");
let choosefile=document.getElementById("choosefile");
if(booktitle.value.trim()==""|| bookauthor.value.trim()==""|| bookgener.value.trim()=="")
{
    alert("Fill the empty fields");
    return false;
}
else if(choosefile.files.length == 0)
{
    alert("Choose appropriate file to upload");
    return false;
}
else{

    alert("Successfully submitted");
    return true;
}
}
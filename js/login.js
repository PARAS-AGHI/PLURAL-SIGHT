var myUserData = JSON.parse(localStorage.getItem("userCreds")) || [];

document.querySelector("#form2").addEventListener("submit",myLogin)

function myLogin(){
    event.preventDefault();

   var First_name = document.querySelector("#user").value;
   var password = document.querySelector("#pass").value;

   for(var i=0;i<myUserData.length;i++){
       if(myUserData[i].Email === First_name){
           if(myUserData[i].Last_name === password){
               alert("Login Successful");
            //    break;
            window.location.href="../home/index.html"
           }
           else{
               alert("Login Failed!");
           }
       }
   }
}
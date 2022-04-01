function takeToPay(){
    alert("Make Payment")
}

function takeToLogin(){
    window.location.href="..//login/successpay.html"
}





document.querySelector('#mynameisform').addEventListener('submit',createAccount);
var myUserData = JSON.parse(localStorage.getItem("userCreds")) || [];

function createAccount(){
event.preventDefault();
 var mydataObject = {
     First_name : document.querySelectorAll("#fname").value,
     Last_name : document.querySelector("#lname").value,
     Email : document.querySelector("#elmail").value,
     Confirm_email : document.querySelector("#celmail").value,
     Country_of_residence : document.querySelector("#cor").value,
     Company_name: document.querySelector("#cona").value,


 };
 
 
 console.log(mydataObject);
 myUserData.push(mydataObject);
 console.log(myUserData);
 localStorage.setItem("userCreds",JSON.stringify(myUserData));
}



document.querySelector('#mymyform').addEventListener('submit',makePayment);
var myPaymentData = JSON.parse(localStorage.getItem("Paymentdetails")) || [];

function makePayment(){
event.preventDefault();
 var mypaymentObject = {
     Card_name : document.querySelectorAll("#finame").value,
     card_num : document.querySelector("#cardnum").value,
     card_expiration : document.querySelector("#one").value,
     card_year : document.querySelector("#two").value,
     CVV : document.querySelector("#cvv").value,
     address: document.querySelector("#add").value,
     address_cont: document.querySelector("#addcon").value,
     country: document.querySelector("#county").value,
     city: document.querySelector("#city").value,
     state: document.querySelector("#state").value,
     postal: document.querySelector("#postal").value,


 };
 
 
 console.log(mypaymentObject);
 myUserData.push(mypaymentObject);
 console.log(myPaymentData);
 localStorage.setItem("Paymentdetails",JSON.stringify(myPaymentData));
}



// cart

var count= JSON.parse(localStorage.getItem("counting")) || []
document.querySelector(".PPQ>div>h2").innerText=count

var result=  JSON.parse(localStorage.getItem("resultit")) || [] 
document.querySelector("#full_tota_two>h2").innerText=result


var sum=0
document.querySelector("#increase").addEventListener("click",incr)
function incr(){
    // var price = "12,299";
    count++
    
    var qty= document.querySelector(".PPQ>div>h2").innerText=count
    var subtotal= price*qty
    
    var total = document.querySelector("#full_tota_two>h2").innerText=subtotal
    localStorage.setItem("counting",count)
    localStorage.setItem("resultit",result)

}


document.querySelector("#decrease").addEventListener("click",decr)
function decr(){
    count--
    localStorage.setItem("counting",count)
    document.querySelector(".PPQ>div>h2").innerText=count
}
function login(){

let username = document.getElementById("username").value
let password = document.getElementById("password").value

/* Demo login credentials */

if(username === "admin" && password === "1234"){

localStorage.setItem("willcoinLoggedIn","true")

window.location.href = "dashboard.html"

}else{

alert("Invalid login details")

}

}

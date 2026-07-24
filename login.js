function login(){
    //input
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    //validate login
    if (username == "admin" && password == "12345"){
        document.getElementById("message").innerHTML = "Login Successful";
        document.getElementById("message").style.color ="green";
        alert("Logged in Successfully!");

    }else{
        document.getElementById("message").innerHTML = "Invalid Username or Password";
        document.getElementById("message").style.color = "red";
    }
   

}
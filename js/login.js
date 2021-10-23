let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginSend = document.querySelector("#send");
let getEmail = localStorage.getItem("email");
let getPassword = localStorage.getItem("password");


loginSend.addEventListener("click", login);

function login(e){
    e.preventDefault();
    if(email.value == "" || password.value == ""){
        alert("email our password is empty");
    }else{
        if(
            getEmail &&
            getEmail.trim() === email.value &&
            getPassword &&
            getPassword.trim() === password.value
        ){
            setTimeout(() => {
                window.location= 'index.html';
            },1500);
        }else{
            alert("email our password is worng");
        }
    }
}
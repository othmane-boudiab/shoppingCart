let userName = document.querySelector("#user");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let reqisterSub = document.querySelector("#sub");

reqisterSub.addEventListener("click", register);

function register (e){
    e.preventDefault();
    if(userName.value == "" || email.value == "" || password.value == ""){
        alert("name our email is empty");
    }else{
        localStorage.setItem("name", userName.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value)

        setTimeout(() => {
            window.location = 'login.html';
        },1500);
    }
}
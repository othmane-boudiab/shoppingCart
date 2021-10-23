let user = document.querySelector("#name");
let logoutBtn = document.querySelector("#logout");

let arrMenu = document.querySelector("#arr i");
let megaMenu = document.querySelector('.mega_menu');
let togCart = document.querySelector("#cart");
let closeBtn = document.querySelector("#close");

togCart.onclick = function () {
    megaMenu.classList.add('open_nav')
}

closeBtn.onclick = function () {
    this.parentElement.classList.remove('open_nav')
}

let getUser = localStorage.getItem("name");
if(getUser != ""){
    user.innerHTML = getUser;
}

logoutBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    localStorage.clear();
    window.location = "index.html"
})
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => { //Menu Icon
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

document.getElementById("contactBtn").addEventListener("click", function () {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}); //Contact Me Button



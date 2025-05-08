let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => { //Menu Icon
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

document.getElementById("contactBtn").addEventListener("click", function () { //Contact Me Button
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
}); 



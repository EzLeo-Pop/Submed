document.addEventListener("DOMContentLoaded", () => {
    fetch("components/navbar.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("navbar").innerHTML = html;
        
        initNavbar();
    })
    .catch((error) => console.error("Error loading navbar:", error));
}); 

let initNavbar =()=> {
    let navDropDown = document.getElementById('nav-dropdown')
    let btn = document.getElementById('icon-bar')
    let btnIcon = document.querySelector('icon-bar i')

btn.onclick = ()=> {
    navDropDown.classList.toggle('open')
}
}

document.addEventListener("DOMContentLoaded", () => {
    fetch("components/navDoctor.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("navbarDoctor").innerHTML = html;
        
        initNavbarDoctor();
    })
    .catch((error) => console.error("Error loading navbar:", error));
}); 

let initNavbarDoctor=()=> {
    let navDropDown = document.getElementById('nav-dropdown')
    let btn = document.getElementById('icon-bar')
    let btnIcon = document.querySelector('icon-bar i')

btn.onclick = ()=> {
    navDropDown.classList.toggle('open')
}
}
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

if(toggle && nav){
    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        toggle.classList.toggle("open");
    });
}
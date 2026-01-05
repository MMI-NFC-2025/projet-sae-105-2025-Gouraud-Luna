
//btn menu
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");

if(toggle && nav){
    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        toggle.classList.toggle("open");
    });
}

// *** CAROUSEL ***
const carousel=document.querySelector(".carousel__container")
const nextButton = document.querySelector(".carousel__button--next")
const prevButton = document.querySelector(".carousel__button--prev")
const premierItem = document.querySelector(".carousel__item");

// Largeur de défilement d’un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });;
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: +premierItem.clientWidth, behavior: "smooth" });;
    });
}
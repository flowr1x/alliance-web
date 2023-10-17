const headerBurger = document.querySelector(".header__burger");
const menuNav = document.querySelector(".header__menu");

headerBurger.addEventListener("click", () => {
    headerBurger.classList.toggle("active");
    menuNav.classList.toggle("active");
    document.body.classList.toggle("_lock");
})
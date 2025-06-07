export let burgerMenuButton = document.querySelector(".header__menu-button");
export let burgerMenu = document.querySelector(".burger");
export let headerNav = document.querySelector(".header__nav");

export function init() {
  burgerMenuButton.addEventListener("click", BurgerMenuToggler);
}

export function BurgerMenuToggler() {
  burgerMenuButton.classList.toggle("header__menu-button--opened");
  burgerMenu.classList.toggle("burger--opened");
  document.addEventListener("keydown", BurgerMenuEscapeClose);
  document.addEventListener("click", BurgerMenuClose);
  let burgerStatus = burgerMenu.classList.contains("burger--opened");
  if (!burgerStatus) {
    document.removeEventListener("keydown", BurgerMenuEscapeClose);
    document.removeEventListener("click", BurgerMenuClose);
  }
}

export function BurgerMenuEscapeClose() {
  if (event.key == "Escape") {
    burgerMenu.classList.remove("burger--opened");
    document.removeEventListener("keydown", BurgerMenuEscapeClose);
    document.removeEventListener("click", BurgerMenuClose);
    burgerMenuButton.classList.remove("header__menu-button--opened");
  }
}

export function BurgerMenuClose(e) {
  if (
    burgerMenu.classList.contains("burger--opened") &&
    !burgerMenu.contains(e.target) &&
    !burgerMenuButton.contains(e.target) &&
    !headerNav.contains(e.target)
  ) {
    burgerMenu.classList.remove("burger--opened");
    document.removeEventListener("keydown", BurgerMenuEscapeClose);
    document.removeEventListener("click", BurgerMenuClose);
    burgerMenuButton.classList.remove("header__menu-button--opened");
  }
}

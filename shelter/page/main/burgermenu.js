// burger handler
(function () {
  const burgerItem = document.querySelector(".header__menu-burger");
  const menu = document.querySelector(".nav__list");

  burgerItem.addEventListener('click', () => {
    burgerItem.classList.toggle('active');
    menu.classList.toggle('active');
  });

}());
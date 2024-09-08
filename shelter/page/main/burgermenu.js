// burger handler
'use strict'


  (function () {
    const burgerItem = document.querySelector(".header__menu-burger");
    const menu = document.querySelector(".nav__list");
    const bodyContainer = document.querySelector('.page-body');
    const overlayWrap = document.querySelector(".overlay");

    burgerItem.addEventListener('click', () => {
      burgerItem.classList.toggle('active');
      menu.classList.toggle('active');
      bodyContainer.classList.toggle('menu-opened');
      overlayWrap.classList.toggle('overlay-active');
    });

    overlayWrap.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) return;
      burgerItem.classList.remove("active");
      menu.classList.remove("active");
      overlayWrap.classList.remove("overlay-active");
      bodyContainer.classList.remove('menu-opened');
    });

    document.querySelectorAll(".nav__item").forEach(n => n.addEventListener("click", () => {
      burgerItem.classList.remove("active");
      menu.classList.remove("active");
      overlayWrap.classList.remove("overlay-active");
    }))

  }());
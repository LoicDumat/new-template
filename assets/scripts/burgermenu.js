(function() {
  const BUTTON = document.querySelector(".burgerMenuButton");
  const MENU = document.querySelector(".primaryNavigation");

  BUTTON.addEventListener("click", clickHandler);

  function clickHandler() {
    MENU.classList.toggle("primaryNavigation--show");

    if (MENU.classList.contains("primaryNavigation--show")) {
      MENU.setAttribute("aria-hidden", "false");
    } else {
      MENU.setAttribute("aria-hidden", "true");
    }
  }
})();

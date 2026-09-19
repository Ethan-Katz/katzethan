const menuBarButton = document.querySelector(".menu-bar");
const mobileNavBar = document.querySelector(".nav-bar-mobile");
const closeNavBar = document.querySelector(".close-button");

const setMenuOpen = (isOpen) => {
  mobileNavBar.classList.toggle("menu-open", isOpen);
  menuBarButton.classList.toggle("menu-open", isOpen);
  menuBarButton.setAttribute("aria-expanded", String(isOpen));
  menuBarButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
};

closeNavBar.addEventListener("click", () => {
  setMenuOpen(false);
  menuBarButton.focus();
});

menuBarButton.addEventListener("click", () => {
  const isOpen = !mobileNavBar.classList.contains("menu-open");
  setMenuOpen(isOpen);
  if (isOpen) {
    closeNavBar.focus();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && mobileNavBar.classList.contains("menu-open")) {
    setMenuOpen(false);
    menuBarButton.focus();
  }
});

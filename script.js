// Compact-width menu. One button toggles the overlay nav; Escape and a click
// on the backdrop close it.
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  nav.dataset.open = String(open);
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

nav.addEventListener("click", (event) => {
  // Only the backdrop itself, not the list of links sitting on top of it.
  if (event.target === nav) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    toggle.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    toggle.focus();
  }
});

// Widening past the breakpoint reveals the full nav, so drop the open state.
matchMedia("(min-width: 901px)").addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

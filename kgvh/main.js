// Query elements
const navbarMenuOffcanvas = document.getElementById("navbar-menu-offcanvas");
const navbarMenuOffcanvasOpenBtn = document.getElementById(
  "navbar-menu-offcanvas-open-btn"
);
const navbarMenuOffcanvasCloseBtn = document.getElementById(
  "navbar-menu-offcanvas-close-btn"
);
const overlay = document.getElementById("overlay");

// Menu button clicked
navbarMenuOffcanvasOpenBtn.addEventListener("click", () => {
  navbarMenuOffcanvas.classList.add("show");
  overlay.classList.add("show");
});

// Close button clicked
navbarMenuOffcanvasCloseBtn.addEventListener("click", () => {
  navbarMenuOffcanvas.classList.remove("show");
  overlay.classList.remove("show");
});

// Overlay clicked
overlay.addEventListener("click", () => {
  navbarMenuOffcanvas.classList.remove("show");
  overlay.classList.remove("show");
});

function go(name)
{
  console.log(name);
  window.location.href = name.href + ".html";
}
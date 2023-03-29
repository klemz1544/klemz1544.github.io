window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  document.getElementById("navbar").classList.add("navbar-scrolled");
} else {
  document.getElementById("navbar").classList.remove("navbar-scrolled");
}
}

// Get the navigation bar element
const navbar = document.querySelector("nav");

// Get the position of the navigation bar
const navbarPosition = navbar.offsetTop;

// Add a "sticky" class to the navigation bar when the page is scrolled beyond its position
window.addEventListener("scroll", function() {
if (window.pageYOffset >= navbarPosition) {
  navbar.classList.add("sticky");
} else {
  navbar.classList.remove("sticky");
}
});
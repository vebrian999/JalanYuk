document.addEventListener("DOMContentLoaded", function () {
  // Set the current year
  document.getElementById("year").innerText = new Date().getFullYear();

  // Mobile menu functionality
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navList = document.querySelector("nav ul");

  mobileMenuButton.addEventListener("click", function () {
    navList.classList.toggle("show");
  });

  // Navbar background change on scroll
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const jumbotron = document.querySelector(".jumbotron");
  const images = ["./assets/img/header-bg (1).png", "./assets/img/header-bg (2).png", "./assets/img/header-bg (3).png", "./assets/img/header-bg (4).png"];
  let currentImageIndex = 0;

  function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const imageUrl = `url('${images[currentImageIndex]}')`;
    jumbotron.style.backgroundImage = imageUrl;
  }

  // Call the function initially
  changeBackgroundImage();

  // Set interval to change the background image every few seconds
  setInterval(changeBackgroundImage, 5000); // Change 5000 to the interval you desire (in milliseconds)
});

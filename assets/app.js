document.addEventListener("DOMContentLoaded", function () {
  var currentYear = new Date().getFullYear();
  document.getElementById("year").innerText = currentYear;
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu");
  const navList = document.querySelector("nav ul");

  mobileMenuButton.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});

let Burger = document.getElementById("burger");
let NavbarList = document.getElementById("navbarList");

Burger.addEventListener("click", function () {
  if (Burger.classList.contains("active")) {
    Burger.classList.remove("active");
    NavbarList.classList.remove("open");
  }
  else {
    Burger.classList.add("active");
    NavbarList.classList.add("open");
  }
})

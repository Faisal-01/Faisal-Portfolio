const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const modal = document.querySelector(".modal");
const navItems = document.querySelector(".nav-items");

bars.addEventListener("click", () => {
    bars.classList.add("hide");
    cross.classList.add("show");
    modal.classList.add("show");
    navItems.classList.add("show");
})

cross.addEventListener("click", () => {
  cross.classList.remove("show");
  bars.classList.remove("hide");
  modal.classList.remove("show");
  navItems.classList.remove("show");
});
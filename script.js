const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const modal = document.querySelector(".modal");
const navItems = document.querySelector(".nav-items");
const progressLine = document.querySelector(".progress-line");
// console.log(progressLine.style.height)


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

window.addEventListener("scroll", () => {
    // console.log(window.document.body.scrollHeight);
    console.log(window.pageYOffset / window.document.body.scrollHeight * 200);
    let progress = 40;
     progress = progress + 
      (window.pageYOffset / window.document.body.scrollHeight) * 200;
    console.log(progress);
    progressLine.style.height = progress + "px";
})
const bars = document.querySelector(".bars");
const cross = document.querySelector(".cross");
const modal = document.querySelector(".modal");
const navItems = document.querySelector(".nav-items");
const progressLine = document.querySelector(".progress-line");

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
    let progress = 40;
     progress = progress + 
      (window.pageYOffset / window.document.body.scrollHeight) * 200;
    progressLine.style.height = progress + "px";
})

// const sections = document.querySelectorAll('section');
// console.log(sections);
// sections.forEach((section) => {
//     section
// })

const list = document.querySelectorAll(".nav-items > li");
list.forEach((item) => {
    item.addEventListener("click", () => {
        const element = document.getElementById(item.textContent.toLowerCase());

        window.scrollTo(0, 
        element.getBoundingClientRect().top +
            document.documentElement.scrollTop - 80
        );
    })
})
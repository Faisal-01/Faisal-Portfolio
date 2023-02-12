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
    let progress = 45;
     progress = progress + 
      (window.pageYOffset / window.document.body.scrollHeight) * 200;
      if(progress > 200)
      {
        progress = 200;
      }
    progressLine.style.height = progress + "px";
})

const list = document.querySelectorAll(".nav-items > li");
list.forEach((item) => {
    item.addEventListener("click", () => {
        const element = document.getElementById(item.textContent.toLowerCase());

        window.scrollTo(0, 
        element.getBoundingClientRect().top +
            document.documentElement.scrollTop - 80
        );

        cross.classList.remove("show");
        bars.classList.remove("hide");
        modal.classList.remove("show");
        navItems.classList.remove("show");
    })
})

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry.target)
            if(!entry.isIntersecting){
                return;
            }
            entry.target.classList.remove("animate");
            observer.unobserve(entry.target)
        })

        // entry.target.classList.remove("animate");
    },
    {
        threshold: .25
    }
);

const sections = document.querySelectorAll("section");
sections.forEach((section) => {

    observer.observe(section);
})
const buttons = document.querySelectorAll("[data-carousel-button]")
const header = document.querySelector("header");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")
  

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

//STICKY SCROLL
function stickyScroll (e) {
    header.classList.toggle("sticky", window.scrollY > 0);
    
}
window.addEventListener("scroll", stickyScroll);
//MENU TOGGLE OPEN
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')

})
//MENU TOGGLE CLOSE
// function scrollClose (e) {
//   if(navbarLinks.classList === "active"){
//     navbarLinks.classList.toggle('inactive', window.scrollY > 0);
//   } else {
//     return console.log("okay");
//   }
// }

//ROUTES
// const route = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({}, "", event.target.href);
//   handleLocation();
// };

// const routes = {
//   404: "/pages/404.html",

//   "/about": "/pages/about.html",
//   "/lorem": "/pages/lorem.html",
// };

// const handleLocation = async () => {
//   const path = window.location.pathname;
//   const route = routes[path] || routes[404];
//   const html = await fetch(route).then((data) => data.text());
//   document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();
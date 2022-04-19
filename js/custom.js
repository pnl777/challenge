// Variables
const toggleMenu = document.getElementById("toggle-menu");
const backBtnMenu = document.getElementById("back-btn-nav");
const mobileNavContainer = document.getElementById("mobile-navigation");
const backToTopBtn = document.querySelector(".back-to-top-blk");

// Handlers
toggleMenu.addEventListener("click", () => {
  mobileNavContainer.classList.add("open-nav");
});

backBtnMenu.addEventListener("click", () => {
  mobileNavContainer.classList.remove("open-nav");
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ScrollMagic

// Slider Gummies
var controller = new ScrollMagic.Controller();
var herbAnimation = TweenMax.fromTo(
  ".herb",
  { clip: "rect(0px, 500px, 450px, 0px)", ease: Linear.easeInOut },
  { clip: "rect(0px, 0px, 450px, 0px)", ease: Linear.easeInOut }
);
var herbSceneSlider = new ScrollMagic.Scene({
  triggerElement: "#startitup",
  triggerhook: 0,
  duration: "40%",
})
  .addTo(controller)
  .setTween(herbAnimation);

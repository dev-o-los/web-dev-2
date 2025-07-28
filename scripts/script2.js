const scrolll = new LocomotiveScroll({
  el: document.querySelector(".onbx"),
  smooth: true,
});

var tl = gsap.timeline();
function animateAppBar() {
  tl.from(".bounding", {
    opacity: 0,
    ease: Expo.easeInOut,
  }).to(".boundingelem", {
    y: 0,
    stagger: 0.2,
  });
}

function scrolltoview(div_name) {
  scrolll.scrollTo(document.querySelector(div_name));
}

function updateLocoscrollWhenImagesLoaded() {
  const container = document.querySelector(".onbx");
  if (!container) return;
  const images = container.querySelectorAll("img");
  let loaded = 0;
  if (images.length === 0) {
    if (scrolll && typeof scrolll.update === "function") scrolll.update();
    return;
  }
  images.forEach((img) => {
    if (img.complete) {
      loaded++;
      if (
        loaded === images.length &&
        scrolll &&
        typeof scrolll.update === "function"
      )
        scrolll.update();
    } else {
      img.addEventListener("load", () => {
        loaded++;
        if (
          loaded === images.length &&
          scrolll &&
          typeof scrolll.update === "function"
        )
          scrolll.update();
      });
    }
  });
}
updateLocoscrollWhenImagesLoaded();

animateAppBar();

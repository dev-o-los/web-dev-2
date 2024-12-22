const scroll = new LocomotiveScroll({
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
  scroll.scrollTo(document.querySelector(div_name));
}

animateAppBar();

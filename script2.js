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

function scrolltoview() {
  let div = document.getElementById("test");
  div.scrollIntoView();
}

animateAppBar();

// const scroll = new LocomotiveScroll({
//   el: document.querySelector(".onbx"),
//   smooth: true,
// });

function animateAppBar() {
  var tl = gsap.timeline();

  tl.from(".bounding", {
    opacity: 0,
    ease: Expo.easeInOut,
  }).to(".boundingelem", {
    y: 0,
    stagger: 0.2,
  });
}

animateAppBar();

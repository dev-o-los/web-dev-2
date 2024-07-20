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
  gsap.registerPlugin(ScrollToPlugin);

  gsap.to(window, {
    duration: 2,
    scrollTo: {
      y: "#target-div",
      autoKill: true,
    },
    ease: "power2.inOut",
  });
}

animateAppBar();

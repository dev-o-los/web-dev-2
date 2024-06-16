const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function animateAppBar() {
  var tl = gsap.timeline();

  tl.from(".bounding", {
    opacity: 0,
    ease: Expo.easeInOut,
  }).to(".boundingelem", {
    y: 0,
  });
}

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(
      "#circle-follower"
    ).style.transform = `translate(${dets.pageX}px , ${dets.pageY}px)`;
  });
}
function imageShow() {
  document.querySelectorAll(".pro").forEach(function (el) {
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(el.querySelector("img"), {
        opacity: 0,
        ease: Power3,
      });
    });
  });

  document.querySelectorAll(".pro").forEach(function (el) {
    var rot = 0,
      diffrot = 0;

    el.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - el.getBoundingClientRect().top - 110;
      diffrot = dets.clientX - rot;
      rot = dets.clientX;
      gsap.to(el.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        bottom: 0,
        left: dets.clientX - 170,
        rotate: gsap.utils.clamp(-90, 90, diffrot),
      });
    });
  });
}

imageShow();

animateAppBar();
// circleMouseFollower();

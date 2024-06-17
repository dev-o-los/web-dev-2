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
    el.addEventListener("mouseleave", function () {
      if (el.querySelector(".view") != null) {
        gsap.to(el.querySelector(".view"), {
          opacity: 0,
          ease: Power3,
        });
      } else {
        gsap.to(el.querySelector("img"), {
          opacity: 0,
          ease: Power3,
        });
      }
    });
  });

  document.querySelectorAll(".pro").forEach(function (el) {
    var rot = 0;
    var diffrot = 0;

    el.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - el.getBoundingClientRect().top - 150;
      diffrot = dets.clientX - rot;
      rot = dets.clientX;

      console.log(el.querySelector(".view") != null);
      console.log(el.querySelector(".view"));

      if (el.querySelector(".view") != null) {
        gsap.to(el.querySelector(".view"), {
          opacity: 1,
          ease: Power3,
          top: diff + 130,
          left: dets.clientX - 45,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
        });
      } else {
        gsapanimate("img", el, diff, dets, diffrot);
      }
    });
  });
}

imageShow();
animateAppBar();
circleMouseFollower();

function gsapanimate(selectorname, el, diff, dets, diffrot) {
  gsap.to(el.querySelector(selectorname), {
    opacity: 1,
    ease: Power3,
    top: diff,
    left: dets.clientX - 190,
    rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
  });
}

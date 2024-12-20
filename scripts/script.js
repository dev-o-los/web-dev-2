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
    const follower = this.document.querySelector("#circle-follower");
    const x = dets.clientX,
      y = dets.clientY;
    follower.style.transform = `translate(${x}px , ${y}px)`;
  });
}

function musicButton() {
  const targetdiv = document.getElementById("music");
  const follower = document.getElementById("circle-follower");
  targetdiv.addEventListener("mouseleave", (dets) => {
    follower.style.height = `10px`;
    follower.style.width = `10px`;
    follower.style.marginTop = "-5px";
    follower.style.marginLeft = "-5px";
  });

  targetdiv.addEventListener("mouseenter", (dets) => {
    follower.style.marginTop = `-19px`;
    follower.style.marginLeft = `-19px`;
    follower.style.width = `40px`;
    follower.style.height = `40px`;
  });
}

function imageShow() {
  document.querySelectorAll(".pro").forEach(function (el) {
    var rot = 0;
    var diffrot = 0;

    el.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - el.getBoundingClientRect().top - 150;
      diffrot = dets.clientX - rot;
      rot = dets.clientX;

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

  document.querySelectorAll(".pro").forEach(function (el) {
    el.addEventListener("mouseout", function () {
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
}

imageShow();
animateAppBar();
circleMouseFollower();
musicButton();

function gsapanimate(selectorname, el, diff, dets, diffrot) {
  gsap.to(el.querySelector(selectorname), {
    opacity: 1,
    ease: Power3,
    top: diff,
    left: dets.clientX - 190,
    rotate: gsap.utils.clamp(-20, 20, diffrot * 0.8),
  });
}

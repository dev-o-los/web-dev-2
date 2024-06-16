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
    console.log(this.document.querySelector("#circle-follower"));
  });
}

document.querySelectorAll(".pro").forEach(function (el) {
  el.addEventListener("mousemove", function (dets) {
    console.log("el :>> ", el.getBoundingClientRect().top);
    console.log("dets.clientY :>> ", dets.clientY);
    var diff = dets.pageY - el.getBoundingClientRect().top;
    gsap.to(el.querySelector("img"), {
      opacity: 1,
      ease: Power1,
      bottom: diff,
      // left: dets.clientX,
    });
  });
});

animateAppBar();
// circleMouseFollower();

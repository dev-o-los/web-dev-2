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

animateAppBar();

// circleMouseFollower();

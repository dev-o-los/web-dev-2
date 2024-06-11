const scroll = new LocomotiveScroll({
  el: document.querySelector("body"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(
      "#circle-follower"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  });
}

circleMouseFollower();

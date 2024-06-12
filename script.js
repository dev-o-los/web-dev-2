const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    this.document.querySelector(
      "#circle-follower"
    ).style.transform = `translate(${dets.pageX}px , ${dets.pageY}px)`;
    console.log(this.document.querySelector("#circle-follower"));
  });
}

circleMouseFollower();

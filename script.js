const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function videoconAnimation() {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function() {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1,
        });
    });

    videocon.addEventListener("mouseleave", function() {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0,
        });
    });

    document.addEventListener("mousemove", function(dets) {
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 50
        });
    });
}
videoconAnimation()

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 120,
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
        /* This will transition our animation one after the other line */

        stagger: 0.3,

    })

}
loadingAnimation()
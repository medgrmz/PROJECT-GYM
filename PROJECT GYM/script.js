// Select the burger icon in the navigation
const burger = document.querySelector("nav svg");

// Add a click event listener to the burger icon
burger.addEventListener("click", () => {
  // Check if the burger icon has the "active" class
  if (burger.classList.contains("active")) {
    // If active, animate the links to slide out and change styles
    gsap.to(".links", { x: "100%" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    // If not active, animate the links to slide in, change styles, and stagger link animations
    gsap.to(".links", { x: "0%" });
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.25, stagger: 0.25 }
    );
    gsap.set("body", { overflow: "hidden" });
  }

  // Toggle the "active" class on the burger icon
  burger.classList.toggle("active");
});

// Get all video elements and set their initial opacity to 0
const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

// Iterate over each video element and create ScrollTrigger animations
videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",

    // When the video enters the viewport, animate opacity and play the video
    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    // When scrolling back into the viewport, play the video
    onEnterBack: () => video.play(),
    // When leaving the viewport, pause the video
    onLeave: () => video.pause(),
    // When scrolling back out of the viewport, pause the video
    onLeaveBack: () => video.pause(),
  });
});

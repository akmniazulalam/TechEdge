const marquee = document.querySelector(".marquee");
const slides = [...marquee.children];

// Duplicate slides to ensure seamless looping
slides.forEach((slide) => {
  let clone = slide.cloneNode(true);
  marquee.appendChild(clone);
});

let speed = 3; // Adjust this for speed
let position = 0;

function animateMarquee() {
  position -= speed;
  marquee.style.transform = `translateX(${position}px)`;

  // Reset when first set of slides fully scrolls out
  if (Math.abs(position) >= marquee.scrollWidth / 2) {
    position = 0;
  }

  requestAnimationFrame(animateMarquee);
}

animateMarquee();

$(document).ready(function () {
  // Initialize the slick slider
  $(".slider").slick({
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Pause duration before sliding (2s)
    speed: 1500, // Smooth transition duration (1s)
    cssEase: "ease-in-out", // Smooth easing effect
    arrows: false, // Hide navigation arrows
    dots: false, // Hide navigation dots
    infinite: true, // Infinite loop
    slidesToShow: 5, // Show 5 logos at a time
    slidesToScroll: 1, // Scroll 1 logo at a time
    pauseOnHover: false, // Don't pause when hovering
    pauseOnFocus: false,
  });
});

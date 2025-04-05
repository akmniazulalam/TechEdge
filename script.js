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
$(document).ready(function () {
  $(".imgSlider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    cssEase: "ease-in-out",
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    pauseOnHover: false,
    pauseOnFocus: false,
    appendDots: $('#custom-dots-container'), // Append dots to custom container
    customPaging: function () {
      return '<button class="w-2 h-2 rounded-full bg-primary outline-2 outline-primary outline-offset-4"></button>';
    }
  });
// Add Tailwind layout classes to the dot wrapper <ul> with justify-between
$('#custom-dots-container ul')
.removeClass('slick-dots')
.addClass('flex justify-center w-full gap-5')

// Ensure the dots <ul> is visible by removing the display: none;
$('#custom-dots-container ul').css('display', 'flex');

  // Disable all default styling that Slick applies to dots
  $("#custom-dots-container.slick-dots").removeClass("slick-dots"); // This removes the default class
  $("#custom-dots-container.slick-dots li").removeClass("slick-active"); // Removes active class styling

  // Optional: Optional: style the dot container using Tailwind
  $("#custom-dots-container.slick-dots").addClass("flex justify-center gap-4 mt-4");

  // Update active dot style
  function setActiveDot() {
    $('#custom-dots-container.slick-dots li button')
      .removeClass('bg-blue-600 w-5 h-5 outline outline-4 outline-blue-500 outline-offset-4')
      .addClass('bg-gray-400 w-3 h-3');
    
    $('#custom-dots-container.slick-dots li.slick-active button')
      .removeClass('bg-gray-400 w-3 h-3')
      .addClass('bg-blue-600 w-5 h-5 outline outline-4 outline-blue-500 outline-offset-4 rounded-full');
  }
// Run it once on load 
  setActiveDot();

  // Re-run after every slide change
  $(".imgSlider").on("afterChange", setActiveDot);
 
});

$(".slick-dots").removeClass("slick-dots"); 
$(".slick-dots li").removeClass("slick-active");



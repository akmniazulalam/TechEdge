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
    speed: 1000,
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
    appendDots: $('#custom-dots-container'),
    customPaging: function () {
      // Default (inactive) dot style
      return '<button class="dot w-3 h-3 rounded-full bg-gray-400 transition-all duration-100"></button>';
    }
  });

  // Tailwind layout for dot list
  $('#custom-dots-container ul')
    .removeClass('slick-dots')
    .addClass('flex justify-center gap-4 mt-4')
    .css('display', 'flex'); // Ensure visible

  // Set active dot styling
  function setActiveDot() {
    const allDots = $('#custom-dots-container li button');

    allDots
      .removeClass('bg-primary w-3 h-3 outline outline-2 outline-primary outline-offset-4')
      .addClass('bg-gray-400 w-3 h-3');

    $('#custom-dots-container li.slick-active button')
      .removeClass('bg-gray-400 w-3 h-3')
      .addClass('bg-primary w-3 h-3 outline outline-2 outline-primary outline-offset-4');
  }

  // Run on load
  setActiveDot();

  // Run on slide change
  $(".imgSlider").on("afterChange", setActiveDot);
});



window.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.counter');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.counterUp.default(counter, {
          duration: 2000,
          delay: 10,
        });
        observer.unobserve(counter);
      }
    });
  }, {
    threshold: 1,
  });

  observer.observe(counter);
});


  window.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counterUp');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          window.counterUp.default(entry.target, {
            duration: 2000,
            delay: 16,
          });
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, { threshold: 1 });

    counters.forEach(counter => {
      observer.observe(counter);
    });
  });


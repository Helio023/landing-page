// Open the video player
document.querySelector(".video-play-btn").addEventListener("click", () => {
  document.querySelector(".video-popup").classList.add("open");
});

// Close the video player
document.querySelector(".video-popup-close").addEventListener("click", () => {
  document.querySelector(".video-popup").classList.remove("open");
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    document.querySelector(".navbar").classList.add("scroll");
  } else {
    document.querySelector(".navbar").classList.remove("scroll");
  }
});

// Owl Carousel

$(document).ready(function () {
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // screenshots carousel
  $(".screenshot-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // testimonial carousel
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Team carousel
  $(".team-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $.scrollIt({
    topOffset: -50,
  });

  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});

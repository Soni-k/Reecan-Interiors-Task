function openVideo(url) {
  window.open(url, "_blank");
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true, // Infinite loop
    margin: 10, // Space between items
    nav: true, // Show navigation buttons
    dots: true, // Show pagination dots
    autoplay: true, // Auto-slide
    autoplayTimeout: 2000, // Speed of auto-slide (2 sec)
    responsive: {
      0: { items: 1 }, // 1 item for small screens
      600: { items: 2 }, // 2 items for medium screens
      1000: { items: 3 }, // 3 items for large screens
      1200: { items: 4 }, // 4 items for extra-large screens
      1400: { items: 5 }, // 4 items for extra-large screens
      1600: { items: 6 }, // 4 items for extra-large screens
    },
  });
});

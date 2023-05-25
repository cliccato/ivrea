var carousel = document.getElementById('backgroundCarousel');
  var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000
  });

function showIvreaInfo() {
    var elementsToShow = document.getElementById("ivrea-info");
    elementsToShow.classList.remove("d-none");
}

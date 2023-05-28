window.addEventListener('DOMContentLoaded', function() {
    var sections = document.querySelectorAll('.scrollable-section');
  
    function animateSections() {
      sections.forEach(function(section) {
        var sectionTop = section.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
  
        if (sectionTop < windowHeight) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    }
  
    animateSections();
  
    window.addEventListener('scroll', animateSections);
});

var backgroundImages = [
    "img/olivetti/fabric.jpg",
    "img/olivetti/shop.jpg",
    "img/olivetti/headquarters.jpg",
    "img/olivetti/awards.jpeg"
];

function setCycleBackgroundImages() {
    var sections = document.querySelectorAll(".scrollable-section");
    sections.forEach(function (section, index) {
        var imageIndex = index % backgroundImages.length;
        var image = backgroundImages[imageIndex];
        section.style.backgroundImage = "url('" + image + "')";
    });
}

setCycleBackgroundImages();
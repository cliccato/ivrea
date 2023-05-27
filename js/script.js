$('.carousel').carousel()

function showIvreaInfo() {
  var button = document.getElementById("show-ivrea-info");
  if (document.getElementById("ivrea-info").classList.contains("d-none")) {
    var elementsToShow = document.getElementById("ivrea-info");
    elementsToShow.classList.remove("d-none");
    button.textContent = "Scopri meno";
  } else {
    var elementsToShow = document.getElementById("ivrea-info");
    elementsToShow.classList.add("d-none");
    button.textContent = "Scopri di più";
  }
}

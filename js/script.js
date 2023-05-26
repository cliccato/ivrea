//Meteo
var wid='6470f03a7c73ada64c8b456e';
    (function() {
	    var wdgt = document.createElement('script'); wdgt.type = 'text/javascript'; wdgt.async = true;
	    wdgt.src = '//widget.3bmeteo.com/widget.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wdgt, s);
    })();

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

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu").style.marginTop = "0px";
    document.getElementById("menu-container").style.marginTop = "15px";

  } else {
    document.getElementById("menu").style.marginTop = "-200px";
    document.getElementById("menu-container").style.marginTop = "-195px";
  }
  prevScrollpos = currentScrollPos;
}
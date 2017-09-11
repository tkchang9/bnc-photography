function fadeEffect(targetId) {
  var ftarget = document.getElementById(targetId);
  ftarget.style.transition = "opacity 1.7s";
  ftarget.style.opacity = 1
}

var slideIndex = 1;
function moveSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("ssWrap");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className +=" active";
}
window.onload = function() {
  //fadeEffect("leftBar");
  setTimeout(function() {fadeEffect("rightContent")}, 300);
  showSlides(slideIndex);
}

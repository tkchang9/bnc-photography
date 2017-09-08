function fadeEffect(targetId) {
  var ftarget = document.getElementById(targetId);
  ftarget.style.transition = "opacity 1.7s";
  ftarget.style.opacity = 1
}

window.onload = function() {
  //fadeEffect("leftBar");
  setTimeout(function() {fadeEffect("rightContent")}, 300);
}

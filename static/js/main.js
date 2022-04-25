var opacity = 100;
document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    opacity -= 5;
    document.getElementsByTagName("body")[0].style.opacity = opacity / 100;
    if (opacity <= 0) {
      document.getElementsByTagName("body")[0].style.display = "none";
    }
  }, 1000);
});

var opacity = 100;
document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    opacity -= 5;
    document.getElementsByTagName("body")[0].style.opacity = opacity / 100;
    if (opacity <= 0) {
      document.getElementsByTagName("body")[0].style.display = "none";
      var body = document.createElement("body");
      body.innerHTML =
        "<h1 class='text-center'>If you think you can get site without kissing my cock, he-he. You are dead wrong!</h1>";
    }
  }, 1000);
});

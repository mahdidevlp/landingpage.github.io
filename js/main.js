document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  var preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.classList.add("opacity-0");
    setTimeout(function () {
      preloader.style.display = "none";
    }, 1000);
  }

  // Smooth scrolling
  var scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var href = link.getAttribute("href");
      var element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

});

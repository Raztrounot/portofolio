AOS.init();

//Navbar Links Active On Scroll
$(document).ready(function () {
  $("body").scrollspy({
    target: "#navbar",
  });
});
//Navbar Links Active On Click
const ul = document.querySelector(".navbar-nav");
ul.addEventListener("click", (e) => {
  if (e.target.className == "nav-link") {
    ul.querySelectorAll("li a").forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");
  }
});

$('a.nav-link').on('click', function(e) {
  e.preventDefault();

  var targetId = $(this).attr('href');
  var offset = $(targetId).offset().top;

  $('html, body').animate({
    scrollTop: offset
  }, 1000);
});

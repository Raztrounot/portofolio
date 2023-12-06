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

function changeSong() {
  var dropdown = document.getElementById("songDropdown1");
  var selectedValue = dropdown.value;

  var titleElement = document.getElementById("songTitle1");
  var audioElement = document.getElementById("audio1");
  var audioSourceElement = document.getElementById("audioSource1");

  switch (selectedValue) {
    case "dear":
      audioSourceElement.src = "p/dear.mp3";
      titleElement.innerText = "Dear God - Avenged Sevenfold";
      break;
    case "light":
      audioSourceElement.src = "p/light.mp3";
      titleElement.innerText = "Light Switch - Charlie Puth"
      break;
    case "pumped":
      audioSourceElement.src = "p/Pumped.mp3";
      titleElement.innerText = "Pumped Up Kicks - Foster The People";
      break;
    case "fluorescent":
      audioSourceElement.src = "p/Fluorescent.mp3";
      titleElement.innerText = "Fluorescent Adolescent - Arctic Monkeys";
      break;
    case "letting":
      audioSourceElement.src = "p/letting.mp3";
      titleElement.innerText = "I Love You But I'm Letting Go - Pamungkas";
      break;
    case "galau":
      audioSourceElement.src = "p/galau.mp3";
      titleElement.innerText = "Lagu Galau - Yowis Ben";
      break;
    // Add cases for other songs if needed
  }

  // Load the new audio source
  audioElement.load();
}
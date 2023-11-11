// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 20;
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


/*----loader---*/

/*----loader---*/
document.addEventListener("DOMContentLoaded", function (event) {
  setTimeout(removePreloader, 3000); // Delay in milliseconds (3 seconds in this example)
});

function removePreloader() {
  document.getElementById("preloader").style.display = "none";
}

/*---Download button---*/
document.getElementById("downloadButton").addEventListener("click", function () {
});


window.onscroll = function () { myFunction0() };

function myFunction0() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
/*---readmore----*/
function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

$(function () {
  $(".dropbtn-nav").click(function (e) {
    e.preventDefault();
    $(".dropdown-content").slideToggle(400);
    $(".fa-chevron-down").toggleClass("active");
  });
});


$(document).ready(function () {
  $(".closebtn").click(function () {
    $(".dropdown-content").removeClass("active");
    $(".dropdown-content").css("display", "none");
  });
});


const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
  const targetSection = e.target.getAttribute("data-section");
  const section = document.querySelector(targetSection);
  targetSection !== "#about"
    ? card.classList.add("is-active")
    : card.classList.remove("is-active");
  card.setAttribute("data-state", targetSection);
  sections.forEach((s) => s.classList.remove("is-active"));
  buttons.forEach((b) => b.classList.remove("is-active"));
  e.target.classList.add("is-active");
  section.classList.add("is-active");
};

buttons.forEach((btn) => {
  btn.addEventListener("click", handleButtonClick);
});

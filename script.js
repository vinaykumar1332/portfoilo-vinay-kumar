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
document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(removePreloader, 3000); // Delay in milliseconds (3 seconds in this example)
});

function removePreloader() {
  document.getElementById("preloader").style.display = "none";
}

/*---Download button---*/
document.getElementById("downloadButton").addEventListener("click", function() {
});
/*----scroll indicator----*/

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
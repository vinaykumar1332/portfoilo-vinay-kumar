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
document.addEventListener("DOMContentLoaded", function(event) {
  setTimeout(removePreloader, 3000); // Delay in milliseconds (3 seconds in this example)
});

function removePreloader() {
  document.getElementById("preloader").style.display = "none";
}

/*---Download button---*/
document.getElementById("downloadButton").addEventListener("click", function() {
});
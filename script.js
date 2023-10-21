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


window.onscroll = function() {myFunction0()};

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

$(document).ready(function() {
  $(".dropbtn-nav").click(function() {
      $(".dropdown-content").slideToggle();
  });
});

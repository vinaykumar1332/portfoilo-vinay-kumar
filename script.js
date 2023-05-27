//----------SCROLL-UP-BUTTON--------------
let mybutton = document.getElementById("myBtn");
    
// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

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
$(window).on('load', function() { // makes sure the whole site is loaded 
$('#status').delay(300).fadeOut('slow'); // will first fade out the loading animation 
$('#preloader').delay(800).fadeOut('slow'); // will fade out the white DIV that covers the website. 
$('body').delay(1000).css({'overflow':'visible'});
})



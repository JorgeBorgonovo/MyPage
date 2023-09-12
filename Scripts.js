/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

/*Rotate Gear Icon*/
(function(document){
  var icon = document.getElementById('Gear');
  var open = false;
  
  icon.addEventListener('click', function(){
    if(open){
      icon.className = 'rotateback';  
    } else{
      icon.className = 'rotate';
    }
    
    open = !open;
  });
})(document);

/*Drop-down Menu Toggle*/

const optionMenu = document.querySelector(".Settings"),
  selectBtn = optionMenu.querySelector(".Menu"),
  options = optionMenu.querySelectorAll(".option");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {


    optionMenu.classList.remove("active");
  });
});

//Style Change
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function toggleStyle(i) {
    var el1 = document.getElementById("Fancy"),
        el2 = document.getElementById("Simple"),
        el3 = document.getElementById("NoPic");
        
    if (i===1) {
      el1.disabled = undefined;
      el2.disabled = "disabled";
      el3.disabled = "disabled";
    }
    else if (i===2){
      el1.disabled = "disabled";
      el2.disabled = "disabled";
      el3.disabled = undefined;  
    }
    else {
      el1.disabled = "disabled";
      el2.disabled = undefined;
      el3.disabled = "disabled";
    }
  }
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

//Dark Mode
    const btn = document.querySelector('.DNToggle');
    btn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
//Pictures

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

showSlides(1);

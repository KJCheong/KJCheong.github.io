let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  console.log(slideIndex);
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}





function OpenPart(evt, Partname) {
  
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(Partname).style.display = "block";
  evt.currentTarget.className += " active";
}




function Engineshow() {

  /* Get image and change value
  of src attribute */
  let Engine = document.getElementById("Engine");

  Engine.src ="Images/Parts.jpg"
  Engine.style.display="inline-block";

  document.getElementById("btnID1").style.display = "none";

  var x = document.getElementById("EngineTxt");
  if (x.innerHTML === " ") {
    x.innerHTML = "Engine go crazy";
  }
}

function Dimeshow() {

  /* Get image and change value
  of src attribute */
  let Dime = document.getElementById("Dime");

  Dime.src ="Images/Dime.png"
  Dime.style.display="inline-block";

  document.getElementById("btnID2").style.display = "none";

  var x = document.getElementById("DimeTxt");
  if (x.innerHTML === " ") {
    x.innerHTML = "Dimensions go crazy";
  }
}

function Wheelshow() {

  /* Get image and change value
  of src attribute */
  let Wheel = document.getElementById("Wheels");
  Wheel.src ="Images/Logo.png"
  Wheel.style.display="inline-block";
  document.getElementById("btnID3").style.display = "none";

  var x = document.getElementById("WheelTxt");
  if (x.innerHTML === " ") {
    x.innerHTML = "Wheels go crazy";
  }
}

function Inteshow() {

  /* Get image and change value
  of src attribute */
  let Inte = document.getElementById("Inte");
  Inte.src ="Images/Interior.jpg"
  Inte.style.display="inline-block";
  document.getElementById("btnID4").style.display = "none";

  var x = document.getElementById("InteTxt");
  if (x.innerHTML === " ") {
    x.innerHTML = "Interior go crazy";
  }
}
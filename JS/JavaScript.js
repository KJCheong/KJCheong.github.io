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
    x.innerHTML = "<h3>Engine</h3><p>The Engine powering the R32 is a RB26DETT (6-cyl. In line, 4-valve DOHC + turbo) making about 2,568cc it can rev up to 6,800rpm making about 276 horse power and a 0-60 in about 5 seconds. <p>However in the current day and age where aftermarket parts and other accessories become more widely available the power of this engine can be pushed to the higher ends of about 1000 horse power.</p></p>";
  }

  var y = document.getElementById("TITLE");
  if (y.innerHTML==" "){
    y.innerHTML="<h1>Nissan R34 GTR</h1>"
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
    x.innerHTML = "<h3>Dimensions</h3><p>The overall length,width and height is 4.6m,1,78m and 1.36m respectively and weighs 1560kgs which allows it to average 11.8 liters per kilometer which by todays standards is quite high but for a sports car of this calibre the kmpl is already conidered quite normal.</p>";
  }

  var y = document.getElementById("TITLE");
  if (y.innerHTML==" "){
    y.innerHTML="<h1>Nissan R34 GTR</h1>"
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
    x.innerHTML = "<h3>Wheels</h3><p>The wheels of a car may not seem that important but fitting it with the right wheels and tires could mean the difference between driving smoothly and skidding off the road. <p>The R34 takes 245/40ZR18 wheels in both the front and rear of the car, broken down this would mean that the car has 245mm width tires and has a 40% aspect ratio of height to width, the ZR is means that is has a pseed rating of over 240km/h and finally the 18 tells us the diameter of the tire is 18 inches.</p></p>";
  }

  var y = document.getElementById("TITLE");
  if (y.innerHTML==" "){
    y.innerHTML="<h1>Nissan R34 GTR</h1>"
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
    x.innerHTML = "<h3>Interior</h3> <p>Back when this car was still new, the fancy gizmos and technology on the dashboard looked like something out of a movie, but now can seem quite tacky and obsolete. <p>It features things like lap timers oil temperature gauges and all sorts of things. However, no one has ever bought a GTR for its interior. The car is more function than form. The car is meant to be more driver oriented, so the seats in front will naturally have bigger room than the back. The vision in the car is also good with the only downside being the bisected rear view due to the spoiler.</p></p>";
  }

  var y = document.getElementById("TITLE");
  if (y.innerHTML==" "){
    y.innerHTML="<h1>Nissan R34 GTR</h1>"
  } 
}



function PlayAudio1(){
  document.getElementById("myAudio1").play();
  document.getElementById("TurboRotate").style.animation="rotate 0.5s infinite linear";
  // if (x.id === " ") {
  //   x.id = "TurboRotate";
  // }
}

function PlayAudio2(){
  document.getElementById("myAudio2").play();
}


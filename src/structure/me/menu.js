{/* <div class="slideshow-container">
  <div class="slideshow-inner">
  
    <div class="mySlides">
      <img class="imges" src="../../../dist/styles/img/eaters-collective-12eHC6FxPyg-unsplash.jpg">
      <p class="description">pasta al pesto</p>
    </div>
    
    <div class="mySlides">
      <img class="imges" src= "../../../dist/styles/img/louis-hansel-shotsoflouis-cC0_UO1Obg4-unsplash.jpg">
      <p class="description">pizza</p>    
    </div>
    
    <div class="mySlides">
      <img class="imges" src="../../../dist/styles/img/wine-dharma-LAQVVwmIZQI-unsplash.jpg">
      <p class="description">spiedini di pesce</p>    
    </div>

    <div class="mySlides">
      <img class="imges" src="../../../dist/styles/img/mgg-vitchakorn-azTbzHoA9nc-unsplash.jpg">
      <p class="description">pesce con clawshew</p>    
    </div>

    <div class="mySlides">
      <img class="imges" src="../../../dist/styles/img/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg">
      <p class="description">pasta ai gamberi</p>    
    </div>

  </div>


  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>
    
</div>  */}

const createMenu = (function(){
    const content = document.querySelector('#content');

    const slideshowContainer = document.createElement('div');
    slideshowContainer.classList.add('slideshow-container');
    const slideshowInner =  document.createElement('div');
    slideshowInner.classList.add('slideshow-inner');

    const slides1 = document.createElement('div');
    slides1.classList.add('mySlides');
    const img1 = document.createElement('img');
    img1.classList.add('images');
    img1.src="../../../dist/styles/img/mgg-vitchakirn-98Xi5vMGKck-unsplash.jpg";
    const p1 = document.createElement('p');
    p1.classList.add('description');
    p1.innerHTML="pasta al pesto";
    slides1.appendChild(p1);

    const slides2 = document.createElement('div');
    slides2.classList.add('mySlides')
    const p2 = document.createElement('p');
    p2.classList.add('description');
    p2.innerHTML="- ToadMo";
    slides2.appendChild(p2);

    const slides3 = document.createElement('div');
    slides3.classList.add('mySlides')
    const p3 = document.createElement('p');
    p3.classList.add('description');
    p3.innerHTML="- Thomas A. Edison";
    slides3.appendChild(p3);

    slideshowInner.appendChild(slides1);
    slideshowInner.appendChild(slides2);
    slideshowInner.appendChild(slides3);

    const a1 = document.createElement('a');
    a1.classList.add('prev');
    // a1.addEventListener('onclick', plusSlides(-1));

    const a2 = document.createElement('a');
    a2.classList.add('next');
    // a2.addEventListener('onclick', plusSlides(1));

    slideshowContainer.appendChild(slideshowInner);
    slideshowContainer.appendChild(a1);
    slideshowContainer.appendChild(a2);

    content.appendChild(slideshowContainer)
})()




























  {/* let slideIndex = 1; 
  let myTimer; 
  let slideshowContainer;

window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
  
    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
    
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "inline";
}

pause = () => {
  clearInterval(myTimer);
}

resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
} */}
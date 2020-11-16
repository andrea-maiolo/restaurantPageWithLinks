{
  /* <div class="slideshow-container">
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
      
  </div>  */
}

//this us the menu page generating function 

// const createMenu = (function() {
function createMenu(){

  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.id='container';

  const slideshowContainer = document.createElement('div');
  slideshowContainer.classList.add('slideshow-container-menu');
  const slideshowInner = document.createElement('div');
  slideshowInner.classList.add('slideshow-inner-menu');

  const slides1 = document.createElement('div');
  slides1.classList.add('mySlides-menu');
  const img1 = document.createElement('img');
  img1.classList.add('images-menu');
  img1.src = "../../../dist/styles/img/eaters-collective-12eHC6FxPyg-unsplash.jpg";
  const p1 = document.createElement('p');
  p1.classList.add('description');
  p1.innerHTML = "Pasta with fresh pesto";
  slides1.appendChild(img1);
  slides1.appendChild(p1);

  const slides2 = document.createElement('div');
  slides2.classList.add('mySlides-menu');
  const img2 = document.createElement('img');
  img2.classList.add('images-menu');
  img2.src = "../../../dist/styles/img/louis-hansel-shotsoflouis-cC0_UO1Obg4-unsplash.jpg";
  const p2 = document.createElement('p');
  p2.classList.add('description');
  p2.innerHTML = "Pizza margherita";
  slides2.appendChild(img2);
  slides2.appendChild(p2);

  const slides3 = document.createElement('div');
  slides3.classList.add('mySlides-menu');
  const img3 = document.createElement('img');
  img3.classList.add('images-menu');
  img3.src = "../../../dist/styles/img/wine-dharma-LAQVVwmIZQI-unsplash.jpg";
  const p3 = document.createElement('p');
  p3.classList.add('description');
  p3.innerHTML = "Fish skewers";
  slides3.appendChild(img3);
  slides3.appendChild(p3);

  const slides4 = document.createElement('div');
  slides4.classList.add('mySlides-menu');
  const img4 = document.createElement('img');
  img4.classList.add('images-menu');
  img4.src = "../../../dist/styles/img/mgg-vitchakorn-azTbzHoA9nc-unsplash.jpg";
  const p4 = document.createElement('p');
  p4.classList.add('description');
  p4.innerHTML = "Coleslaw salad with smoking salmon";
  slides4.appendChild(img4);
  slides4.appendChild(p4);

  const slides5 = document.createElement('div');
  slides5.classList.add('mySlides-menu');
  const img5 = document.createElement('img');
  img5.classList.add('images-menu');
  img5.src = "../../../dist/styles/img/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg";
  const p5 = document.createElement('p');
  p5.classList.add('description');
  p5.innerHTML = "Pasta with shrimps";
  slides5.appendChild(img5);
  slides5.appendChild(p5);

  slideshowInner.appendChild(slides1);
  slideshowInner.appendChild(slides2);
  slideshowInner.appendChild(slides3);
  slideshowInner.appendChild(slides4);
  slideshowInner.appendChild(slides5);

  const a1 = document.createElement('a');
  a1.classList.add('prev-menu');
  a1.innerHTML = "❮";

  const a2 = document.createElement('a');
  a2.classList.add('next-menu');
  a2.innerHTML = "❯";

  slideshowContainer.appendChild(slideshowInner);
  slideshowContainer.appendChild(a1);
  slideshowContainer.appendChild(a2);

  container.appendChild(slideshowContainer);

  content.appendChild(container)
// })()
}


export {createMenu}






// let slideIndex = 1;
// let myTimer;
// let slideshowContainer;
// let a1 = document.querySelector('.prev');
// let a2 = document.querySelector('.next');
// a1.addEventListener('click', go);
// a2.addEventListener('click', go);

// function go(e) {
//   arrow = e.path[0];
//   if (arrow == a2) {
//       plusSlides(1);
//   } else if (arrow == a1) {
//       plusSlides(-1);
//   }
// }

// window.addEventListener("load", function() {
//   showSlides(slideIndex);
//   myTimer = setInterval(function() {
//       plusSlides(1)
//   }, 4000);

//   //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
//   slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

//   slideshowContainer.addEventListener('mouseenter', pause)
//   slideshowContainer.addEventListener('mouseleave', resume)
// })

// // NEXT AND PREVIOUS CONTROL
// function plusSlides(n) {
//   clearInterval(myTimer);
//   if (n < 0) {
//       showSlides(slideIndex -= 1);
//   } else {
//       showSlides(slideIndex += 1);
//   }

//   if (n === -1) {
//       myTimer = setInterval(function() {
//           plusSlides(n + 2)
//       }, 4000);
//   } else {
//       myTimer = setInterval(function() {
//           plusSlides(n + 1)
//       }, 4000);
//   }
// }

// //Controls the current slide and resets interval if needed
// function currentSlide(n) {
//   clearInterval(myTimer);
//   myTimer = setInterval(function() {
//       plusSlides(n + 1)
//   }, 4000);
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {
//       slideIndex = 1
//   }
//   if (n < 1) {
//       slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "inline";
// }

// pause = () => {
//   clearInterval(myTimer);
// }

// resume = () => {
//   clearInterval(myTimer);
//   myTimer = setInterval(function() {
//       plusSlides(slideIndex)
//   }, 4000);
// }
{/* <div class="slideshow-container">
  <div class="slideshow-inner">
    <div class="mySlides fade">

      <q class="text">Great food.
        We ate here during the week and we really enjoyed the food. Staff were very attentive and helpful. We are here for the summer and are really enjoying the food in Dingle. Great Restaurant</q>
      <p class="author">- AlexCoventry12</p>
    </div>
    
    <div class="mySlides fade">
      <q class="text">Well worth a return visit
        We visited Random on 14th August to celebrate a family birthday. This was the second time we visited this year as we had visited in previously in July with friends. The food was delicious- everyone was delighted with the portions even the hungry males. The service was friendly. In these times of COVID restrictions it also felt safe. We will be back on our next visit to Dingle. Would highly recommend this restaurant.</q>
      <p class="author">- ToadMo</p>
    </div>
    
    <div class="mySlides fade">
      <q class="text">Excellent cooking with great ingredients & robust flavours
        Looking for something a little different in Dingle? Random is a real find in a town where there is lots of great food but many menus look similar. Modern cooking with a twist here but not gimmicky. Portions are not small and there is good variety from a compact menu. There is no 'kids menu' as such but the restaurant is really accommodating and flexible in going 'off menu' for younger palates so you are sure to find something. Staff were very professional and welcoming from making the booking to the end of our meal. We went here on our last night of a week's holiday and will go back when we next visit Dingle.</q>
      <p class="author">- Thomas A. Edison</p>
    </div>
  </div>


  <a class="prev" onclick="plusSlides(-1)">❮</a>
  <a class="next" onclick="plusSlides(1)">❯</a>
    
  </div> */}

  //this fucntion will generate the above content

const createStories = (function(){

    const content = document.querySelector('#content');

    const slideShowContainer = document.createElement('div');
    slideShowContainer.classList.add('slideshow-container');
    const slideshowInner =  document.createElement('div');
    slideshowInner.classList.add('slideshow-inner');

    const slides1 = document.createElement('div');
    slides1.classList.add('mySlides');
    const q1 = document.createElement('q');
    q1.classList.add('text');
    q1.innerHTML = "Great food. We ate here during the week and we really enjoyed the food. Staff were very attentive and helpful. We are here for the summer and are really enjoying the food in Dingle. Great Restaurant"
    const p1 = document.createElement('p');
    p1.classList.add('author');
    p1.innerHTML="- AlexCoventry12";
    slides1.appendChild(q1);
    slides1.appendChild(p1);

    const slides2 = document.createElement('div');
    slides2.classList.add('mySlides')
    const q2 = document.createElement('q');
    q2.classList.add('text');
    q2.innerHTML = "Well worth a return visit. We visited Random on 14th August to celebrate a family birthday. This was the second time we visited this year as we had visited in previously in July with friends. The food was delicious- everyone was delighted with the portions even the hungry males. The service was friendly. In these times of COVID restrictions it also felt safe. We will be back on our next visit to Dingle. Would highly recommend this restaurant."
    const p2 = document.createElement('p');
    p2.classList.add('author');
    p2.innerHTML="- ToadMo";
    slides2.appendChild(q2);
    slides2.appendChild(p2);

    const slides3 = document.createElement('div');
    slides3.classList.add('mySlides')
    const q3 = document.createElement('q');
    q3.classList.add('text');
    q3.innerHTML = "Excellent cooking with great ingredients & robust flavours. Looking for something a little different in Dingle? Random is a real find in a town where there is lots of great food but many menus look similar. Modern cooking with a twist here but not gimmicky. Portions are not small and there is good variety from a compact menu. There is no 'kids menu' as such but the restaurant is really accommodating and flexible in going 'off menu' for younger palates so you are sure to find something. Staff were very professional and welcoming from making the booking to the end of our meal. We went here on our last night of a week's holiday and will go back when we next visit Dingle."
    const p3 = document.createElement('p');
    p3.classList.add('author');
    p3.innerHTML="- Thomas A. Edison";
    slides3.appendChild(q3);
    slides3.appendChild(p3);

    slideshowInner.appendChild(slides1);
    slideshowInner.appendChild(slides2);
    slideshowInner.appendChild(slides3);

    const a1 = document.createElement('a');
    a1.classList.add('prev');
    a1.innerHTML = "❮";

    const a2 = document.createElement('a');
    a2.classList.add('next');
    a2.innerHTML="❯";

    slideShowContainer.appendChild(slideshowInner);
    slideShowContainer.appendChild(a1);
    slideShowContainer.appendChild(a2);

    content.appendChild(slideShowContainer);

})()



let slideIndex = 1;
let myTimer;
let slideshowContainer;
let a1 = document.querySelector('.prev');
let a2 = document.querySelector('.next');
a1.addEventListener('click', go);
a2.addEventListener('click', go);

function go(e){
  arrow = e.path[0];
  if(arrow == a2){
    plusSlides(1); 
  }else if(arrow ==a1){
    plusSlides(-1); 
  }
}


      //this is the part of code that creates the carousel
      window.addEventListener("load",function() {
        showSlides(slideIndex);
        myTimer = setInterval(function(){plusSlides(1)}, 4000);
    
        slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];
      
        slideshowContainer.addEventListener('mouseenter', pause)
        slideshowContainer.addEventListener('mouseleave', resume)
    })
        
    //Controls the current slide and resets interval if needed
    function currentSlide(n){
      clearInterval(myTimer);
      myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
      showSlides(slideIndex = n);
    }
    
    function showSlides(n){
      let slides = document.getElementsByClassName("mySlides");
      let i;
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex-1].style.display = "block";
    }

        // NEXT AND PREVIOUS CONTROL
        function plusSlides(n){
          clearInterval(myTimer);
          if (n < 0){
            showSlides(slideIndex -= 1);
          } else {
           showSlides(slideIndex += 1); 
          }
          
          //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
          
          if (n === -1){
            myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);
          } else {
            myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
          }
        }
    
    pause = () => {
      clearInterval(myTimer);
    }
    
    resume = () =>{
      clearInterval(myTimer);
      myTimer = setInterval(function(){plusSlides(slideIndex)}, 4000);
    }
  
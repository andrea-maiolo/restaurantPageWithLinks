//importing all file here
import {pageLoad} from './pageLoad'
import {reservationsPageGenerator} from './structure/res/reservations'
import {createStories} from './structure/sto/stories'
import {createMenu} from './structure/me/menu'

//those are the nav that will help you navigate in the website
let a1Top = document.querySelector('#a1Top');
a1Top.addEventListener('click', loadMenuPage);

let a2Top = document.querySelector('#a2Top');
a2Top.addEventListener('click', loadStoriesPage);

let a3Top = document.querySelector('#a3Top');
a3Top.addEventListener('click', loadReservationPage);
//this is the main window of the page
let content = document.querySelector('#content');
//footer to be moved at the end of page
let footer = document.querySelector('#footer');

//those are the functions that load the respective pages
function loadReservationPage(){
   let container = document.querySelector('#container');
    content.removeChild(container);
    content.removeChild(footer);
    reservationsPageGenerator();
    content.appendChild(footer);
}

function loadStoriesPage(){
   let container = document.querySelector('#container');
   content.removeChild(container);
   content.removeChild(footer);
   createStories();
   content.appendChild(footer);
   startCarouselStory();
}

function loadMenuPage(){
   let container = document.querySelector('#container');
   content.removeChild(container);
   content.removeChild(footer);
   createMenu();
   content.appendChild(footer);
}

 //this is the logic for the carousel
 function startCarouselStory(){
 let slideIndex = 1;
 let myTimer;
 let slideshowContainer;
 let a1 = document.querySelector('.prev-stories');
 let a2 = document.querySelector('.next-stories');
 a1.addEventListener('click', go);
 a2.addEventListener('click', go);
 
 function go(e) {
   let arrow = e.path[0];
   if (arrow == a2) {
       plusSlides(1);
   } else if (arrow == a1) {
       plusSlides(-1);
   }
 }
 
 
 //this is the part of code that creates the carousel
 window.addEventListener('change', function() {
   showSlides(slideIndex);
   myTimer = setInterval(function() {
       plusSlides(1)
   }, 4000);
 
   slideshowContainer = document.getElementsByClassName('slideshow-inner-stories')[0];
 
   slideshowContainer.addEventListener('mouseenter', pause)
   slideshowContainer.addEventListener('mouseleave', resume)
 })
 
 //Controls the current slide and resets interval if needed
 function currentSlide(n) {
   clearInterval(myTimer);
   myTimer = setInterval(function() {
       plusSlides(n + 1)
   }, 4000);
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   let slides = document.getElementsByClassName("mySlides-stories");
   let i;
   if (n > slides.length) {
       slideIndex = 1
   }
   if (n < 1) {
       slideIndex = slides.length
   }
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slides[slideIndex - 1].style.display = "block";
 }
 
 // NEXT AND PREVIOUS CONTROL
 function plusSlides(n) {
   clearInterval(myTimer);
   if (n < 0) {
       showSlides(slideIndex -= 1);
   } else {
       showSlides(slideIndex += 1);
   }
 
   //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
 
   if (n === -1) {
       myTimer = setInterval(function() {
           plusSlides(n + 2)
       }, 4000);
   } else {
       myTimer = setInterval(function() {
           plusSlides(n + 1)
       }, 4000);
   }
 }
 
 let pause = () => {
   clearInterval(myTimer);
 }
 
 let resume = () => {
   clearInterval(myTimer);
   myTimer = setInterval(function() {
       plusSlides(slideIndex)
   }, 4000);
 }
}
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
}

function loadMenuPage(){
   let container = document.querySelector('#container');
   content.removeChild(container);
   content.removeChild(footer);
   createMenu();
   content.appendChild(footer);
}


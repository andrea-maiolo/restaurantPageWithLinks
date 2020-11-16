 import {pageLoad} from './pageLoad'
import {reservationsPageGenerator} from './structure/res/reservations'


let a3Top = document.querySelector('#a3Top');
a3Top.addEventListener('click', loadReservationPage);
let content = document.querySelector('#content');
let header = document.querySelector('.header');
let divImagesPannel = document.querySelector('.imagesP');
let footer = document.querySelector('#footer');


 function loadReservationPage(){
    content.removeChild(divImagesPannel);
    reservationsPageGenerator()
   }
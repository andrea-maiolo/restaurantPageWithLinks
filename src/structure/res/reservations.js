// <p>Scoresby St 34</p>
// <p>Telephone 07451-770586</p>
// <p>Email mariosreservations@gmail.com</p>
// <div>
//     <table>
//         <caption>Orari di apertura</caption>
//         <tr>
//             <th scope="col">Day</th>
//             <th scope="col">Open</th>
//             <th scope="col">Close</th>
//         </tr>
//         <tr>
//             <td>Monday</th>
//             <td>19:00</td>
//             <td>23:30</td>
//         </tr>
//         <tr>
//             <td>Tuesday</th>
//             <td>19:00</td>
//             <td>23:30</td>
//         </tr>
//         <tr>
//             <td>Wednsay</th>
//             <td>19:00</td>
//             <td>23:30</td>
//         </tr>
//         <tr>
//             <td>Thursday</th>
//             <td>19:00</td>
//             <td>23:30</td>
//         </tr>
//         <tr>
//             <td>Friday</th>
//             <td>12:00</td>
//             <td>23:30</td>
//         </tr>
//         <tr>
//             <td>Saturday</th>
//             <td>12:00</td>
//             <td>23:30</td>
//         </tr>
//         <tr>
//             <td>Sunday</th>
//             <td>12:00</td>
//             <td>23:30</td>
//         </tr>
//     </table>   
//     <div>
//         <img src="map.png">
//     </div>  

//this is the reservations page generated by the below function

// const reservationsPageGenerator = (function() {
function reservationsPageGenerator(){
    const content = document.querySelector('#content');

    const p1 = document.createElement('p');
    p1.innerHTML = "Scoresby St 34";
    const p2 = document.createElement('p');
    p2.innerHTML = "Telephone 07451-770586";
    const p3 = document.createElement('p');
    p3.innerHTML = "Email mariosreservations@gmail.com"

    const tableDiv = document.createElement('div');
    const table = document.createElement('table');

    const caption = document.createElement('caption');
    caption.innerHTML = "Working hours";

    const tr1 = document.createElement('tr');
    const th1_1 = document.createElement('th');
    th1_1.scope = "col";
    th1_1.innerHTML = "Day";
    const th1_2 = document.createElement('th');
    th1_2.scope = "col";
    th1_2.innerHTML = "Open";
    const th1_3 = document.createElement('th');
    th1_3.scope = "col";
    th1_3.innerHTML = "Close";
    tr1.appendChild(th1_1);
    tr1.appendChild(th1_2);
    tr1.appendChild(th1_3);

    const tr2 = document.createElement('tr');
    const th2_1 = document.createElement('th');
    th2_1.innerHTML = "Monday";
    const th2_2 = document.createElement('th');
    th2_2.innerHTML = "19:00";
    const th2_3 = document.createElement('th');
    th2_3.innerHTML = "23:30";
    tr2.appendChild(th2_1);
    tr2.appendChild(th2_2);
    tr2.appendChild(th2_3);

    const tr3 = document.createElement('tr');
    const th3_1 = document.createElement('th');
    th3_1.innerHTML = "Tuesday";
    const th3_2 = document.createElement('th');
    th3_2.innerHTML = "19:00";
    const th3_3 = document.createElement('th');
    th3_3.innerHTML = "23:30";
    tr3.appendChild(th3_1);
    tr3.appendChild(th3_2);
    tr3.appendChild(th3_3);

    const tr4 = document.createElement('tr');
    const th4_1 = document.createElement('th');
    th4_1.innerHTML = "Wednesday";
    const th4_2 = document.createElement('th');
    th4_2.innerHTML = "19:00";
    const th4_3 = document.createElement('th');
    th4_3.innerHTML = "23:30";
    tr4.appendChild(th4_1);
    tr4.appendChild(th4_2);
    tr4.appendChild(th4_3);

    const tr5 = document.createElement('tr');
    const th5_1 = document.createElement('th');
    th5_1.innerHTML = "Thursday";
    const th5_2 = document.createElement('th');
    th5_2.innerHTML = "19:00";
    const th5_3 = document.createElement('th');
    th5_3.innerHTML = "23:30";
    tr5.appendChild(th5_1);
    tr5.appendChild(th5_2);
    tr5.appendChild(th5_3);

    const tr6 = document.createElement('tr');
    const th6_1 = document.createElement('th');
    th6_1.innerHTML = "Friday";
    const th6_2 = document.createElement('th');
    th6_2.innerHTML = "12:00";
    const th6_3 = document.createElement('th');
    th6_3.innerHTML = "23:30";
    tr6.appendChild(th6_1);
    tr6.appendChild(th6_2);
    tr6.appendChild(th6_3);

    const tr7 = document.createElement('tr');
    const th7_1 = document.createElement('th');
    th7_1.innerHTML = "Saturday";
    const th7_2 = document.createElement('th');
    th7_2.innerHTML = "12:00";
    const th7_3 = document.createElement('th');
    th7_3.innerHTML = "23:30";
    tr7.appendChild(th7_1);
    tr7.appendChild(th7_2);
    tr7.appendChild(th7_3);

    const tr8 = document.createElement('tr');
    const th8_1 = document.createElement('th');
    th8_1.innerHTML = "Sunday";
    const th8_2 = document.createElement('th');
    th8_2.innerHTML = "12:00";
    const th8_3 = document.createElement('th');
    th8_3.innerHTML = "23:30";
    tr8.appendChild(th8_1);
    tr8.appendChild(th8_2);
    tr8.appendChild(th8_3);

    table.appendChild(caption);
    table.appendChild(tr1);
    table.appendChild(tr2);
    table.appendChild(tr3);
    table.appendChild(tr4);
    table.appendChild(tr5);
    table.appendChild(tr6);
    table.appendChild(tr7);
    table.appendChild(tr8);

    tableDiv.appendChild(table);

    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.src = "../../../dist/styles/img/map.png";

    imgDiv.appendChild(img);

    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(tableDiv);
    content.appendChild(imgDiv);
// })();
}

export {reservationsPageGenerator}
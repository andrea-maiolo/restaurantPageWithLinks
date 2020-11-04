
const pageLoad = (function(){
    const content =document.querySelector('#content');

    let h1 = document.createElement('h1');
    h1.innerHTML = "Welcome to Mario's, from pageLoad!";

    let img = document.createElement('img');
    img.src= "./front.jpg";
    img.width = 500;
    img.height =300;
    img.alt="Front of restaurant";

    let p1 = document.createElement('p');
    p1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent elit felis, maximus non diam ut, suscipit aliquet lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ultricies neque non magna volutpat venenatis. Maecenas finibus volutpat ante a pharetra. Ut lobortis nisl diam, non feugiat lorem maximus sit amet. Suspendisse potenti. Morbi et enim et sapien molestie aliquam dapibus placerat sapien. Integer pulvinar porttitor risus suscipit venenatis. Donec ante dui, luctus vel luctus vitae, malesuada in nibh. Duis vestibulum at libero vitae tristique. Integer vel lobortis elit, vel malesuada nunc. Proin urna purus, dignissim vel ante in, mollis maximus orci. Maecenas scelerisque eu ante non fringilla. Fusce sit amet velit justo. Aliquam tristique eget sem in cursus.Aliquam tempus tristique ex, sed dapibus augue suscipit vel.Maecenas tincidunt vehicula eros non semper."
   
    let img2 = document.createElement('img');
    img2.src="./food.jpg";
    img2.alt="Smoked salmon";
    img2.width=300;
    img2.height=200;

    let p2 = document.createElement('p');
    p2.innerHTML= "Vivamus a orci nec augue gravida luctus a et nibh. Aliquam sed lectus at risus feugiat faucibus et sit amet velit. Aenean eu dui augue. Vestibulum egestas lacinia nisi eget finibus. Suspendisse quam eros, finibus at nulla quis, posuere lacinia diam.Nam non porttitor metus. Quisque imperdiet hendrerit eros, non condimentum nunc posuere lobortis."

    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(p1);
    content.appendChild(img2);
    content.appendChild(p2);


    return content
})();

export {pageLoad}
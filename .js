const header =document.querySelector("header");

window.addEventListener ("scrol", function() {
    header.classList.toggle ("stiky",window.scrolly >0 );
});

let menu =document.querySelector('#menu-icon');
let navbar =document.querySelector('navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
};

sr.reveal('content',{delay:190, origin:'bottom'})
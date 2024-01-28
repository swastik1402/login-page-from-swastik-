let text = document.getElementById('text');
let bruj = document.getElementById('bruj');
let header= document.getElementById('header');

window.addEventListener('scroll',()=> {
    let value  = window.scrollY;
    text.style.left = value * -2 + 'px';
    header.style.left = value * +2 + 'px';
 
 
   

})
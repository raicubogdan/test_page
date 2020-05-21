const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');



    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

var count = $('.thumbnail li').length;
var start = 0;
function sequence(){
$('.thumbnail li').eq(start).fadeTo(1500, 1, function(){
    start++;
    if(start<count) sequence();
});
}

sequence();
navSlide();

/************************* taggle icon navbar*****************/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/************************Scroll Sellection Active link****/

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let hight = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + hight){
            navLink.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('head nav a[href*='+ id + ']').classList.add('active'); 
            });
        };
    });

    //***********************Sticky navbar******************/

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /****remove toggle icon and navbar when click navbar link(Scroll)*******/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


}
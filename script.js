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


};

//************Scroll Revail****************************/

     ScrollReveal({
    //  reset: true,
     distance: '80px',
     duration:2000,
     delay: 200
     });

     ScrollReveal().reveal('.home-content, .heading', {origin : 'top'});
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .content form',{origin:'botom'});
     ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
     ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

     //*********************** typed js ******************/

     const typed = new Typed('.multiple-text',{
        Strings : ['JAVA BACKEND DEVELOPER','JAVA BACKEND DEVELOPER','JAVA BACKEND DEVELOPER'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
     });
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* MENU APARECE */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/* MENU DESAPARECE */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*================ANIMAÇÃO CORTINA================*/
document.addEventListener('DOMContentLoaded', function(){
    const wrapper = document.querySelector('.imagem-mostruario');
    const curtain = document.querySelector('.cortina-efx');
  
    wrapper.addEventListener('mouseover', function(){
      curtain.style.height = '100%';
    });
  
    wrapper.addEventListener('mouseout', function(){
      curtain.style.height = '0';
    });
  
  });
document.addEventListener('DOMContentLoaded', function(){
    const wrapper = document.querySelector('.imagem-mostruario2');
    const curtain = document.querySelector('.cortina-efx2');
  
    wrapper.addEventListener('mouseover', function(){
      curtain.style.height = '100%';
    });
  
    wrapper.addEventListener('mouseout', function(){
      curtain.style.height = '0';
    });
  
  });
/*========================ANIMAÇÃO AGENT ACADEMY============================*/

let killjoyazul1 = document.getElementById('killjoy_blueefx');
let killjoyrosa1 = document.getElementById('killjoy_pinkefx');
let Killjoy_Artwork_Full = document.getElementById('killjoy_png');
let jinx_jinx = document.getElementById('jinx')
let jinx_was = document.getElementById('was')

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    killjoyazul1.style.left = value * -0.2 + 'px';
    killjoyrosa1.style.left = value * 0.1 + 'px';
    Killjoy_Artwork_Full.style.top = value * 0.1 + 'px';
    Killjoy_Artwork_Full.style.marginLeft = value * 0.1 + 'px';
    jinx.style.marginLeft = value * -0.02 + 'px';
    was.style.marginLeft = value * 0.02 + 'px';
});
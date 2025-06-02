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

/*=============== SELETOR DE JOGADORES ===============*/
function atualizarFiltro() {
  const jogo = document.getElementById('filtro-jogo').value.toLowerCase();
  const rota = document.getElementById('filtro-rota').value.toLowerCase();
  const genero = document.getElementById('filtro-genero').value.toLowerCase();

  const cards = document.querySelectorAll('.card__article');

  cards.forEach(card => {
    const dataJogo = card.dataset.jogo?.toLowerCase() || "";
    const dataRota = card.dataset.rota?.toLowerCase() || "";
    const dataGenero = card.dataset.genero?.toLowerCase() || "";

    const matchJogo = !jogo || dataJogo.includes(jogo);
    const matchRota = !rota || dataRota.split(/[\s,]+/).includes(rota);
    const matchGenero = !genero || dataGenero.includes(genero);

    const mostrar = matchJogo && matchRota && matchGenero;

    card.style.display = mostrar ? 'block' : 'none';
  });
}
/*=============== QUESTIONARIO PARA JOGADORES ===============*/
  document.getElementById('questionario-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const selecionados = [];
    document.querySelectorAll('input[name="dificuldades"]:checked').forEach(input => {
      selecionados.push(input.value);
    });

    // Armazena no localStorage
    localStorage.setItem('filtrosDificuldade', JSON.stringify(selecionados));

    // Redireciona para a tela dos coachs
    window.location.href = '../index.html';
  });

window.addEventListener('DOMContentLoaded', () => {
  const dificuldades = JSON.parse(localStorage.getItem('filtrosDificuldade')) || [];

  document.querySelectorAll('.card__article').forEach(card => {
    const tags = card.getAttribute('data-dificuldades')?.split(',') || [];

    // Se tiver filtros, esconde os que não combinam
    if (dificuldades.length > 0 && !dificuldades.some(d => tags.includes(d))) {
      card.style.display = 'none';
    }
  });
});
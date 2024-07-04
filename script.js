console.log('script connecté !');

// Import des balises du menu de navigation 

const linkCursus = document.getElementById('linkCursus');
console.log(linkCursus);
const linkValor = document.getElementById('linkValor');
console.log(linkValor);
const linkDreams = document.getElementById('linkDreams');
console.log(linkDreams);

const linkMangas = document.getElementById('linkMangas');
console.log(linkMangas);
const linkPainting = document.getElementById('linkPainting');
console.log(linkPainting);
const linkJV = document.getElementById('linkJV');
console.log(linkJV);


// Import des balises des articles

const cursus = document.querySelector('.cursus');
console.log(cursus);
const valor = document.querySelector('.valor');
console.log(valor);
const dreams = document.querySelector('.dreams');
console.log(dreams);

const mangas = document.querySelector('.mangas');
console.log(mangas);
const painting = document.querySelector('.painting');
console.log(painting);
const jv = document.querySelector('.jv');
console.log(jv);

//Cette fonction gère l'apparition, par le haut (ma vie) ou par le bas de la page (hobbies), des articles
function gestionApparitionArticle (unArticle,topBottom) {
    if (topBottom === 'top') {
        unArticle.classList.toggle('changeArticleTop');
        console.log('apparition article par le haut')
    }else if(topBottom === 'bottom'){
        unArticle.classList.toggle('changeArticleBottom');
        console.log('apparition article par le bas')
    }else {
        console.log('paramètre fonction gestionApparitionArticle erroné')
    }
};


linkCursus.addEventListener('click', function (){
    gestionApparitionArticle(cursus, 'top');
    console.log('linkCursus cliqué')
})

linkValor.addEventListener('click', function (){
    gestionApparitionArticle(valor, 'top');
    console.log('linkValor cliqué')
})

linkDreams.addEventListener('click', function (){
    gestionApparitionArticle(dreams, 'top');
    console.log('linkDreams cliqué')
})

linkMangas.addEventListener('click', function (){
    gestionApparitionArticle(mangas, 'bottom');
    console.log('linkMangas cliqué')
})

linkPainting.addEventListener('click', function (){
    gestionApparitionArticle(painting, 'bottom');
    console.log('linkPainting cliqué')
})

linkJV.addEventListener('click', function (){
    gestionApparitionArticle(jv, 'bottom');
    console.log('linkJV cliqué')
})


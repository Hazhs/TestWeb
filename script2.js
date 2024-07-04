
console.log('script connecté !');

const liensEtArticles = {
    linkCursus: document.querySelector('.cursus'),
    linkValor: document.querySelector('.valor'),
    linkDreams: document.querySelector('.dreams'),
    linkMangas: document.querySelector('.mangas'),
    linkPainting: document.querySelector('.painting'),
    linkJV: document.querySelector('.jv')
};

let articleVisible = null; // actuellement visible

// Fonction pour gérer l'apparition et la disparition des articles
function gestionApparitionArticle(article) {
    if (articleVisible && articleVisible !== article) {
        // Si un article est déjà visible et différent de celui cliqué
        articleVisible.classList.remove('changeArticleTop', 'changeArticleBottom'); // On masque l'article actuel
        setTimeout(() => { // On attends la fin de la transition
            article.classList.add('changeArticleTop'); // On affiche le nouvel article
        }, 200); // Temps de transition
    } else {
        // Si aucun article n'est visible ou si le même article est cliqué à nouveau
        article.classList.toggle('changeArticleTop');
    }
    articleVisible = article; // On met à jour l'article actuellement visible
}

// Ajout des écouteurs d'événements
Object.keys(liensEtArticles).forEach(id => {
    const lien = document.getElementById(id);
    lien.addEventListener('click', () => gestionApparitionArticle(liensEtArticles[id]));
});
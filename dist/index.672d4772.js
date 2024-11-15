// Detectamos el scroll
window.addEventListener('scroll', function() {
    const header = document.getElementById('title-header');
    const navbar = document.getElementById('navbar');
    // Añadimos o quitamos la clase 'scrolled' en función del scroll
    if (window.scrollY > 50) document.body.classList.add('scrolled');
    else document.body.classList.remove('scrolled');
});

//# sourceMappingURL=index.672d4772.js.map

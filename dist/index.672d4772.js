
window.addEventListener('scroll', function() {
    const header = document.getElementById('title-header');
    const barra_dalt = document.getElementById('barra_dalt');
    // Añadimos o quitamos la clase 'scrolled' en función del scroll
    if (window.scrollY > 50) document.body.classList.add('scrolled');
    else document.body.classList.remove('scrolled');
});



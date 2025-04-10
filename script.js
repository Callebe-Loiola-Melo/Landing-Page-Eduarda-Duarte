function openWhatsApp() {
    window.location.href = "https://wa.me/556183601021?text=Olá,%20gostaria%20de%20agendar%20um%20horário";
}

function openInstagram() {
    window.location.href = "https://www.instagram.com/a_eduardaduarte/";
}

// Exibir a segunda parte quando rolar a página
window.addEventListener('scroll', function() {
    var secondPage = document.querySelector('.second-page');
    var secondPagePosition = secondPage.getBoundingClientRect().top;

    if (secondPagePosition <= window.innerHeight * 0.75) {
        secondPage.style.display = "flex";
        secondPage.classList.add('fade-in');
    }
});

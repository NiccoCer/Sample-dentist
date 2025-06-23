// Animazione pulsante Prenota una visita
const prenotaBtn = document.getElementById('prenota-btn');
if (prenotaBtn) {
    prenotaBtn.addEventListener('mouseenter', () => {
        prenotaBtn.style.boxShadow = '0 0 24px #00fff7cc, 0 0 48px #00fff799';
    });
    prenotaBtn.addEventListener('mouseleave', () => {
        prenotaBtn.style.boxShadow = '';
    });
    prenotaBtn.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('contatti').offsetTop - 40,
            behavior: 'smooth'
        });
    });
}

// Gestione invio form di contatto
const form = document.getElementById('contatti-form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        form.reset();
        alert('Grazie per averci contattato! Ti risponderemo al più presto.');
    });
} 
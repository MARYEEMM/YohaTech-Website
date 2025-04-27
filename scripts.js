document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        // Vérification simple
        if (emailInput.value && messageInput.value) {
            // Construction du lien mailto pour envoyer un email
            const mailTo = encodeURIComponent(emailInput.value);
            const subject = encodeURIComponent('Subject: Contact Form Submission');
            const body = encodeURIComponent(messageInput.value);

            // Utilisation du lien mailto pour envoyer un email
            window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;

            // Vider les champs du formulaire
            emailInput.value = '';
            messageInput.value = '';

            // Affichage d'un message de succès
            alert('Votre message a été envoyé avec succès!');
        } else {
            alert('Veuillez remplir tous les champs requis.');
        }
    });
});
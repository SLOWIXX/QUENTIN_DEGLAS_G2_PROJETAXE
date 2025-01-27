document.addEventListener('DOMContentLoaded', function() {
    // Utiliser la clé correcte pour récupérer l'utilisateur du localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('username').textContent = currentUser.pseudo;
        document.getElementById('email').textContent = currentUser.email;
    } else {
        console.log('Aucun utilisateur connecté.');
    }
});

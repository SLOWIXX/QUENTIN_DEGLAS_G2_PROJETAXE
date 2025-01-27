document.addEventListener('DOMContentLoaded', function() {
    const confirmYes = document.getElementById('confirmYes');
    const confirmNo = document.getElementById('confirmNo');

    // Event listener for the "Oui" button
    confirmYes.addEventListener('click', function() {
        // Remove "currentUser" and "isLoggedIn" from local storage
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
        // Redirect to register.html
        window.location.href = 'register.html';
    });

    // Event listener for the "Non" button
    confirmNo.addEventListener('click', function() {
        // Redirect to design_cartes.html
        window.location.href = 'design_cartes.html';
    });
});
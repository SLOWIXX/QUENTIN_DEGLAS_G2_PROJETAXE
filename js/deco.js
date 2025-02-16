document.addEventListener('DOMContentLoaded', function() {
    const confirmYes = document.getElementById('confirmYes');
    const confirmNo = document.getElementById('confirmNo');

    confirmYes.addEventListener('click', function() {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'register.html';
    });
    confirmNo.addEventListener('click', function() {
        window.location.href = 'design_cartes.html';
    });
});
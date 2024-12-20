document.addEventListener('DOMContentLoaded', function() {
    let utilisateurs = []; // Stocke les utilisateurs inscrits
  
    // Affiche le formulaire d'inscription
    window.afficherFormulaireInscription = function() {
      document.getElementById('formulaireInscription').style.display = 'block';
      document.getElementById('formulaireConnexion').style.display = 'none';
    }
  
    // Affiche le formulaire de connexion
    window.afficherFormulaireConnexion = function() {
      document.getElementById('formulaireConnexion').style.display = 'block';
      document.getElementById('formulaireInscription').style.display = 'none';
    }
  
    // Fonction pour inscrire un utilisateur
    window.inscrireUtilisateur = function() {
      let pseudo = document.getElementById('pseudoInscription').value;
      let motDePasse = document.getElementById('motDePasseInscription').value;
      let mail = document.getElementById('mailInscription').value;
  
      if (pseudo && motDePasse && mail) {
        utilisateurs.push({ pseudo, motDePasse, mail });
        alert("Inscription réussie !");
        // Réinitialise les champs
        document.getElementById('pseudoInscription').value = '';
        document.getElementById('motDePasseInscription').value = '';
        document.getElementById('mailInscription').value = '';
      } else {
        alert("Tous les champs doivent être remplis.");
      }
    }
  
    // Fonction pour connecter un utilisateur
    window.connecterUtilisateur = function() {
      let pseudo = document.getElementById('pseudoConnexion').value;
      let motDePasse = document.getElementById('motDePasseConnexion').value;
  
      let utilisateur = utilisateurs.find(u => u.pseudo === pseudo && u.motDePasse === motDePasse);
  
      if (utilisateur) {
        alert("Connexion réussie !");
        // Code pour rediriger vers la plateforme ou déverrouiller l'accès
      } else {
        alert("Pseudo ou mot de passe incorrect.");
      }
    }
  });
  
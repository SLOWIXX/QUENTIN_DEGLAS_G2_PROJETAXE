window.onload = () => {
    const intro = document.getElementById("intro");
    const loginForm = document.querySelector(".login");
  
    // Afficher l'intro "Bienvenue" pendant 2 secondes
    setTimeout(() => {
      intro.style.opacity = 0; // Disparaître l'intro
      setTimeout(() => {
        intro.style.display = "none"; // Cacher après animation
        loginForm.style.display = "block"; // Afficher le formulaire
      }, 800); // Transition d'opacité
    }, 1000);
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    // Récupération des éléments du DOM pour l'inscription
    const pseudoInputRegister = document.getElementById("usernameRegister");
    const emailInputRegister = document.getElementById("mailRegister");
    const passwordInputRegister = document.getElementById("passwordRegister");
    const submitRegisterButton = document.getElementById("submitRegisterForm");
  
    // Récupération des éléments du DOM pour la connexion
    const emailInputLogin = document.getElementById("mailLogin");
    const passwordInputLogin = document.getElementById("passwordLogin");
    const submitLoginButton = document.getElementById("submitLoginForm");
  
    const usernameMessage = document.getElementById('usernameMessage');
    const emailMessage = document.getElementById('emailMessage');
    const passwordMessage = document.getElementById('passwordMessage');
    const emailMessageLogin = document.getElementById('emailMessageLogin');
    const passwordMessageLogin = document.getElementById('passwordMessageLogin');
  
    // Fonction pour sauvegarder un utilisateur dans le localStorage
    const saveUser = (pseudo, email, password) => {
      const users = JSON.parse(localStorage.getItem("users")) || [];
  
      // Vérifier si l'utilisateur existe déjà (par email)
      const userExists = users.some((user) => user.email === email);
      if (userExists) {
        return false;
      }
  
      // Ajouter le nouvel utilisateur
      users.push({ pseudo, email, password, favoris: [] });
      localStorage.setItem("users", JSON.stringify(users));
      return true;
    };
  
    // Fonction pour vérifier l'email
    const isValidEmail = (email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
  
    // Validation en temps réel du username
    pseudoInputRegister.addEventListener('input', () => {
      if (pseudoInputRegister.value.length >= 3) {
        usernameMessage.textContent = 'Pseudo correct';
        usernameMessage.className = 'valid';
      } else {
        usernameMessage.textContent = 'Le pseudo doit avoir au moins 3 caractères';
        usernameMessage.className = 'invalid';
      }
    });
  
    // Validation en temps réel de l'email pour l'inscription
    emailInputRegister.addEventListener('input', () => {
      if (isValidEmail(emailInputRegister.value)) {
        emailMessage.textContent = 'Adresse email valide';
        emailMessage.className = 'valid';
      } else {
        emailMessage.textContent = 'Adresse email invalide';
        emailMessage.className = 'invalid';
      }
    });
  
    // Validation en temps réel du mot de passe pour l'inscription
    passwordInputRegister.addEventListener('input', () => {
      if (passwordInputRegister.value.length >= 6) {
        passwordMessage.textContent = 'Mot de passe valide';
        passwordMessage.className = 'valid';
      } else {
        passwordMessage.textContent = 'Le mot de passe doit avoir au moins 6 caractères';
        passwordMessage.className = 'invalid';
      }
    });
  
    // Gérer le clic sur le bouton "Submit" (Inscription)
    submitRegisterButton.addEventListener("click", (event) => {
      event.preventDefault(); // Empêche le rechargement de la page
  
      const pseudo = pseudoInputRegister.value.trim();
      const email = emailInputRegister.value.trim();
      const password = passwordInputRegister.value.trim();
  
      // Vérifier si tous les champs sont remplis
      if (!pseudo || !email || !password) {
        usernameMessage.textContent = "Veuillez remplir tous les champs.";
        usernameMessage.className = 'invalid';
        emailMessage.textContent = "Veuillez remplir tous les champs.";
        emailMessage.className = 'invalid';
        passwordMessage.textContent = "Veuillez remplir tous les champs.";
        passwordMessage.className = 'invalid';
        return; // Empêche la redirection si les champs sont vides
      }
  
      // Vérification de l'email et du mot de passe avant de sauvegarder
      if (!isValidEmail(email)) {
        emailMessage.textContent = "Veuillez entrer une adresse e-mail valide.";
        emailMessage.className = 'invalid';
        return; // Empêche la redirection si l'email est invalide
      }
  
      const success = saveUser(pseudo, email, password);
      if (success) {
        pseudoInputRegister.value = "";
        emailInputRegister.value = "";
        passwordInputRegister.value = "";
  
        // Rediriger vers la page d'accueil
        window.location.href = "design_cartes.html";
      } else {
        emailMessage.textContent = "Un utilisateur avec cet e-mail existe déjà.";
        emailMessage.className = 'invalid';
      }
    });
  
    submitLoginButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      const email = emailInputLogin.value.trim();
      const password = passwordInputLogin.value.trim();
  
      // Vérifier si les champs sont remplis
      if (!email || !password) {
        emailMessageLogin.textContent = "Veuillez remplir tous les champs.";
        emailMessageLogin.className = 'invalid';
        passwordMessageLogin.textContent = "Veuillez remplir tous les champs.";
        passwordMessageLogin.className = 'invalid';
        return; // Empêche la redirection si les champs sont vides
      }
  
      // Vérification de l'email avant de procéder
      if (!isValidEmail(email)) {
        emailMessageLogin.textContent = "Veuillez entrer une adresse e-mail valide.";
        emailMessageLogin.className = 'invalid';
        return; // Empêche la redirection si l'email est invalide
      }
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
  
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        localStorage.setItem("isLoggedIn", "true"); // Ajoute cette ligne pour marquer l'utilisateur comme connecté
  
        // Rediriger vers la page d'accueil
        window.location.href = "design_cartes.html";
      } else {
        emailMessageLogin.textContent = "Email ou mot de passe incorrect.";
        emailMessageLogin.className = 'invalid';
        passwordMessageLogin.textContent = "Email ou mot de passe incorrect.";
        passwordMessageLogin.className = 'invalid';
      }
  });
  
  
  
  
  
  
    // Toggle de la visibilité du mot de passe
    const togglePasswordButton = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("passwordRegister");
  
    togglePasswordButton.addEventListener("click", () => {
      // Vérifier le type actuel et le basculer
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
  
      // Changer l'icône en fonction du type
      const icon = togglePasswordButton.querySelector("i");
      if (type === "password") {
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      } else {
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }
    });
  });
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const togglePasswordButtonLogin = document.getElementById("togglePassword");
    const passwordInputLogin = document.getElementById("passwordLogin");
  
    togglePasswordButtonLogin.addEventListener("click", () => {
      // Vérifier le type actuel et le basculer
      const type = passwordInputLogin.type === "password" ? "text" : "password";
      passwordInputLogin.type = type;
  
      // Changer l'icône en fonction du type
      const icon = togglePasswordButtonLogin.querySelector("i");
      if (type === "password") {
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
      } else {
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
      }
    });
  });
  
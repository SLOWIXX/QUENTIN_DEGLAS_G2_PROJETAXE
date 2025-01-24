window.onload = () => {
  const intro = document.getElementById("intro");
  const loginForm = document.querySelector(".login");

  setTimeout(() => {
    intro.classList.add("fade-out");
    setTimeout(() => {
      intro.style.display = "none";
      loginForm.style.display = "block";
    }, 800);
  }, 100);
};

document.addEventListener("DOMContentLoaded", () => {
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

  function switchForm(showFormId, hideFormId) {
    document.getElementById(showFormId).style.display = "flex";
    document.getElementById(hideFormId).style.display = "none";
}

  document.getElementById("showRegisterForm").addEventListener("click", () => {
    switchForm("registerForm", "loginForm");
  });

  document.getElementById("showLoginForm").addEventListener("click", () => {
    switchForm("loginForm", "registerForm");
  });

  function validateInput(input, condition, validMessage, invalidMessage, messageElement) {
    if (condition(input.value.trim())) {   // trim = enlever les espaces debut et fin
        messageElement.textContent = validMessage;
        messageElement.className = "valid";
        return true;
    } else {
        messageElement.textContent = invalidMessage;
        messageElement.className = "invalid";
        return false;
    }
}

  const saveUser = (pseudo, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((user) => user.email === email)) {
      return false;
    }
    users.push({ pseudo, email, password, favoris: [] });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  const registerUser = () => {
    const pseudoInput = document.getElementById("usernameRegister");
    const emailInput = document.getElementById("mailRegister");
    const passwordInput = document.getElementById("passwordRegister");

    const usernameMessage = document.getElementById("usernameMessage");
    const emailMessage = document.getElementById("emailMessage");
    const passwordMessage = document.getElementById("passwordMessage");

    const isPseudoValid = validateInput(
      pseudoInput,
      (value) => value.length >= 3,
      "Pseudo correct",
      "Le pseudo doit avoir au moins 3 caractères",
      usernameMessage
    );

    const isEmailValid = validateInput(
      emailInput,
      isValidEmail,
      "Adresse email valide",
      "Adresse email invalide",
      emailMessage
    );

    const isPasswordValid = validateInput(
      passwordInput,
      (value) => value.length >= 6,
      "Mot de passe valide",
      "Le mot de passe doit avoir au moins 6 caractères",
      passwordMessage
    );

    if (isPseudoValid && isEmailValid && isPasswordValid) {
      if (saveUser(pseudoInput.value, emailInput.value, passwordInput.value)) {
        usernameMessage.textContent = "Inscription réussie !";
        usernameMessage.className = "valid";
      } else {
        emailMessage.textContent = "L'utilisateur existe déjà.";
        emailMessage.className = "invalid";
      }
    }
  };

  const handleLogin = () => {
    const emailInput = document.getElementById("mailLogin");
    const passwordInput = document.getElementById("passwordLogin");

    const emailMessage = document.getElementById("emailMessageLogin");
    const passwordMessage = document.getElementById("passwordMessageLogin");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let isValid = true;

    if (!email) {
      emailMessage.textContent = "Veuillez entrer une adresse e-mail.";
      emailMessage.className = "invalid";
      isValid = false;
    } else if (!isValidEmail(email)) {
      emailMessage.textContent = "Veuillez entrer une adresse e-mail valide.";
      emailMessage.className = "invalid";
      isValid = false;
    } else {
      emailMessage.textContent = "";
    }

    if (!password) {
      passwordMessage.textContent = "Veuillez entrer un mot de passe.";
      passwordMessage.className = "invalid";
      isValid = false;
    } else {
      passwordMessage.textContent = "";
    }

    if (!isValid) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      console.log("C4EST BIEN T LOGIN");
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "design_cartes.html";
    } else {
      emailMessage.textContent = "Email ou mot de passe incorrect.";
      emailMessage.className = "invalid";
      passwordMessage.textContent = "Email ou mot de passe incorrect.";
      passwordMessage.className = "invalid";
    }
  };

  document
    .getElementById("submitRegisterForm")
    .addEventListener("click", (event) => {
      event.preventDefault();
      registerUser();
    });

  document
    .getElementById("submitLoginForm")
    .addEventListener("click", (event) => {
      event.preventDefault();
      handleLogin();
    });
});

function togglePasswordVisibility(inputId, buttonId) {
  console.log("togglePasswordVisibility");
  const toggleButton = document.getElementById(buttonId);
  const passwordInput = document.getElementById(inputId);

  if (!toggleButton || !passwordInput) {
    console.error("Toggle button or password input not found");
    return;
  }

  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";

  const icon = toggleButton.querySelector("i");
  if (icon) {
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
  }
}
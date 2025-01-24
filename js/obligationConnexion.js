function checkLogin() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const currentUser = localStorage.getItem("currentUser");
  const currentPath = window.location.pathname;

  console.log(isLoggedIn);
  console.log(currentUser);

  if (isLoggedIn === "true" && currentUser) {
    console.log("C4EST BIEN T LOGIN");
    if (currentPath !== "/design_cartes.html") {
      window.location.href = "design_cartes.html";
    }
  } else {
    console.log(currentPath);
    if (currentPath === "/design_cartes.html") {
      window.location.href = "register.html";
    }
  }
}

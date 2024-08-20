document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//Chequea si esta logeado o no
document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem('login_success')) || false;
  const authLinks = document.getElementById('auth-links');

  if (!user) {
    // Si el usuario no está autenticado, redirige a login.html
    window.location.href = 'login.html';
  }

  // Mostrar los enlaces según el estado de autenticación
  if (user) {
    authLinks.innerHTML = `
      <a class="nav-link" href="profile.html">Perfil</a>
      <a class="nav-link" href="#" id="logout">Cerrar sesión</a>
    `;

    document.getElementById('logout').addEventListener('click', (event) => {
      event.preventDefault();
      alert("¡Hasta pronto!");
      localStorage.removeItem('login_success');
      window.location.href = 'login.html';
    });
  } else {
    authLinks.innerHTML = `
      <a class="nav-link" href="login.html">Iniciar sesión</a>
      <a class="nav-link" href="register.html">Registrarse</a>
    `;
  }
});

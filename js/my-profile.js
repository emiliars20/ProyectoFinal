document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('login_success')) || false;
  
    if (!user) {
      // Si el usuario no está autenticado, redirige a login.html
      window.location.href = 'login.html';
    }
  
    // Aquí puedes agregar más lógica específica para la página de perfil si es necesario
  });
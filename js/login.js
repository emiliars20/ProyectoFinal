document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault() // Evita el envío del formulario
    
    // Redirige a la página index.html
    window.location.href = 'index.html'
  });

    //Función para que valide usuario y contraseña y lo guarde en localStorage

  const loginForm = document.querySelector('#login-form');
  loginForm.addEventListener('submit', (event)=>{
        event.preventDefault();
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value

        const Users =JSON.parse(localStorage.getItem('users')) || []
        const validUser = Users.find(user=> user.email === email && user.password === password);

        if(!validUser){
            return alert ("Usuario y/o contraseña incorrectos");
        }
        alert ("¡Hola es un placer tenerte por acá!");
       
      localStorage.setItem('login_success', JSON.stringify(validUser));
       window.location.href = "index.html"
        });
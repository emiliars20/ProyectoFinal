
//Función de registro de nuevo usuario

/* const signupform = document.querySelector('#signupform')
signupform.addEventListener('submit', (e)=>{
       e.preventDefault()
        const usuario = document.querySelector('.usuario').value
       const password = document.querySelector('.password').value

        const Users =JSON.parse(localStorage.getItem('users')) || []
        const IsUserRegistered = Users.find(user=>user.usuario === usuario)
        if (IsUserRegistered) { return alert ("El usuario ya se ha registrado")}

       Users.push({usuario: usuario, password: password})
       localStorage.setItem('users',JSON.stringify(Users))
       alert ("Registro exitoso")
       window.location.href = "login.html"
   }) */


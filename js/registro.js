
//Función de registro de nuevo usuario

 const signupform = document.querySelector('#signupform');
 signupform.addEventListener('submit', (e)=>{
       e.preventDefault();
       const nombre = document.querySelector('#name').value
       const email = document.querySelector('#email').value
       const password = document.querySelector('#password').value

        const Users =JSON.parse(localStorage.getItem('users')) || []
        const IsUserRegistered = Users.find(user=>user.email === email);
        if (IsUserRegistered) { 
            return alert ("Este usuario ya se encuentra registrado")
        };

       Users.push({name: name, email: email, password: password})
       localStorage.setItem('users',JSON.stringify(Users))
       alert ("Registro Exitoso");
       window.location.href = "login.html"
   });


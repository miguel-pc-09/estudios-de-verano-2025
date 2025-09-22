document.getElementById('formulario').addEventListener('submit',(event) =>{
    event.preventDefault()

    // Validar campo nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){               // R: Trim -> borra los espacios
        errorNombre.textContent = 'Por favor, introduce tu nombre.';
        errorNombre.classList.add('error-message');
    }else{
        errorNombre.textContent = '';
        errorNombre.classList.remove('error-message');
    }

    // Validar correo electrónico
    let emailEntrada = document.getElementById('email');
    let emailError = document.getElementById('emailError');
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;                  // Patrón de validación básico
    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introduce un correo válido ';
        emailError.classList.add('error-message');
    }else{
        emailError.textContent = '';
        emailError.classList.remove('error-message');
    }

    // Validar la contraseña
    let contrasenaEntrada = document.getElementById('password');
    let contrasenaError = document.getElementById('passwordError');
    let contrasenaPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    if(!contrasenaPattern.test(contrasenaEntrada.value)){
        contrasenaError.textContent = 'La contraseña debe tener al menos 8 caracteres, números, Mayúsculas y Minúsculas y caracteres especiales ';
        contrasenaError.classList.add('error-message');
    }else{
        contrasenaError.textContent = '';
        contrasenaError.classList.remove('error-message');
    }

    // Si todos los campos son válidos enviar formulario
    if(!errorNombre.textContent && !emailError.textContent && !contrasenaError.textContent){

        // BACKEND QUE RECIBA LA INFORMACIÓN
        db.collection("users").add({
    nombre: entradaNombre.value,
    email: emailEntrada.value,
    password: contrasenaEntrada.value
  })
  .then((docRef) => {
    alert('El formulario se ha enviado con éxito', docRef.id);
    document.getElementById('formulario').reset();
  })
  .catch((error) => {
    alert(error);
  });
        alert('El formulario se ha enviado con éxito');
        document.getElementById('formulario').reset();
    }
})
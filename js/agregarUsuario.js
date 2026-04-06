function NewUser(e) {
    if (e) e.preventDefault();

    const nombreCompleto = document.getElementById("nameC").value;
    const correoElectronico = document.getElementById("correoC").value;
    const userName = document.getElementById("userC").value;
    const contrasegna = document.getElementById("contraC").value;
    const roles = document.getElementById("rolC").value;
    //validar

    if (nombreCompleto === "" || correoElectronico === "" || userName === "") {
        alert("Por favor, completa todos los campos de texto.");
        return;
    }
    if (contrasegna.length < 7) {
        alert("La contraseña debe tener al menos 7 caracteres.");
        return;
    }
    if (roles === "Seleccionar rol") {
    alert("Debes asignar un rol al usuario.");
    return;
    }
    const yaExiste = usuariosSistema.some(u=>
        u.usuario === userName || u.correo === correoElectronico
    );
    if (yaExiste) {
        alert("Error al crear usuario ya que el nombre de usuario o el correo ya han sido registrados.");
        return;
    }
    
    const nuevousuario = {
        usuario: userName,          
        password: contrasegna,      
        nombre: nombreCompleto,     
        correo: correoElectronico,  
        rol: roles,                
        estado: "Activo"            
    };

    let usuariosNuevos = JSON.parse(localStorage.getItem("usuariosExtras")) || [];
    
    usuariosNuevos.push(nuevousuario);
    localStorage.setItem("usuariosExtras", JSON.stringify(usuariosNuevos));

    alert("Usuario guardado exitosamente.");
    window.location.href = "./panel-usuario.html";
}
function cargarInfo() {
    const nombreUsuario = localStorage.getItem("SingIn");

    if (!nombreUsuario) {
        window.location.href="../login.html";
        return;
    }

    const dbUser = usuariosSistema.find(u => u.nombre === nombreUsuario);

    if (dbUser) {
        document.getElementById("nameL").innerHTML = `<strong>Nombre:</strong> ${dbUser.nombre}`;
        document.getElementById("correoL").innerHTML = `<strong>Correo:</strong> ${dbUser.correo}`;
        document.getElementById("rolL").innerHTML = `<strong>Rol:</strong> ${dbUser.rol}`;
        document.getElementById("estadoL").innerHTML = `<strong>Estado:</strong> ${dbUser.estado}`;

        const estado = document.getElementById("estadoL");
        estado.style.color = dbUser.estado.trim() === "Activo"?"green" : "red";

    }
}
cargarInfo();
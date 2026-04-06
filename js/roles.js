function VerificarRol() {
    const botonCrear = document.getElementById("botonCrear");
    if (!botonCrear) {
        return
    }

    const nombreG = localStorage.getItem("SingIn");
    const usuarioEncontrado = usuariosSistema.find(u=> u.nombre===nombreG);

    if (!usuarioEncontrado) {
        return
    }

    if (usuarioEncontrado.rol === "Barbero"||usuarioEncontrado.rol === "Recepción") {
        botonCrear.style.display = "none";
    }else if (usuarioEncontrado === "Administrador") {
        botonCrear.href = "agregar-usuario.html";
        botonCrear.style.display = "block";
    }
}
VerificarRol()
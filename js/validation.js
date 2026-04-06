function configurarLogin() {
    const formularioContacto = document.getElementById("formulario-contacto");
    const notaLogin = document.getElementById("nota-login");
    if (!formularioContacto) return;
    formularioContacto.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nameTxt").value;
        const pass = document.getElementById("passTxt").value;

        if (usuariosSistema.length === 0) {
            notaLogin.textContent = "Cargando base de datos, por favor espere...";
            return;
        }

        //cargar base de datos
        const loginExitoso = usuariosSistema.find(u =>
            u.usuario === nombre && u.password === pass
        );



        //base de datos local
        if (loginExitoso) {
            localStorage.setItem("SingIn", loginExitoso.nombre);
            window.location.href = "../index.html";

        } else {
            notaLogin.textContent = "El usuario o la contraseña son incorrectos o no esta activa.";
            notaLogin.style.color = "red";
        }
    });
}
//Solo es estetica
function enviarCorreo() {
    document.getElementById("nm").value = "";
    document.getElementById("crr").value = "";
    document.getElementById("comm").value = "";
    alert("Gracias por comentarnos.");
}
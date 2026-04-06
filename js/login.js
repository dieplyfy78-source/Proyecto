//userLink
    function SingIn() {
        const linkear = document.getElementById("userLink");

        const saveName = localStorage.getItem("SingIn");

        if(saveName){
            linkear.textContent = saveName;

            linkear.href = "panel-usuario.html";

        }else{
            linkear.href = "login.html";
            linkear.textContent = "Login";
        }
    }
SingIn()


function SingOut() {
    localStorage.removeItem("SingIn");
    alert("Sesion cerrada correctamente.");
    Window.location.href = "index.html";
}


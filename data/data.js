const contenidoUsuarios = `admin|admin31|userAdmin|admin@admin.com|Administrador|Activo
user|QWEASD123HN.|Zytrux|zytrux@gmail.com|Barbero|Activo`;

function obtenerUsuario() {
    const filas = contenidoUsuarios.split("\n");
    const db = filas.map(filas=>{
        const datos =  filas.split("|");
        return{
            usuario: datos[0],
            password: datos[1],
            nombre: datos[2],
            correo: datos[3],
            rol: datos[4],
            estado: datos[5]
        };
    });
    const extrasJSON = localStorage.getItem("usuariosExtras");
    const dbDin = extrasJSON ? JSON.parse(extrasJSON):[];
    return [...db, ...dbDin];
}


const usuariosSistema = obtenerUsuario();
console.log(usuariosSistema);
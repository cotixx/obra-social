
//REGISTRO DE USUARIO NUEVO

const usuario= {
    credencial:"",
    nombre:"",
    contrasena:"" ,
    correo:"",
    telefono:""
};
const crearCuenta = document.getElementById("cuentaNueva");

crearCuenta.onclick= function crearUsuario(){
    let credencial=prompt("Ingresar credencial como usuario: ");
    if (usuario.credencial === credencial){
        alert("Ya existe usuario con esta credencial") 
        return;
    }else if(usuario!="" || usuario!=null) {
        delete usuario;
    }
    while(credencial === ""){
        credencial=prompt("Ingresar credencial como usuario: ");
    }
    let nombre=prompt("Ingresar nombre y apellido: ");
    while(nombre=="" || nombre===null){
        nombre=prompt("Ingresar nombre y apellido: ");
    }
    let contrasena=prompt("Ingresar contraseña: ");
    while(contrasena=="" || contrasena===null){
        contrasena=prompt("Ingresar contraseña: ");
    }
    let correo=prompt("Ingresar correo: ");
    while(correo=="" || correo===null || correo===usuario[2]){
        correo=prompt("Ingresar correo válido: ");
    }
    let telefono=prompt("Ingresar telefono: ");
    while(telefono=="" || telefono===null){
        telefono=prompt("Ingresar telefono: ");
    }
    if(credencial && contrasena != ""){
        usuario.credencial=credencial;
        usuario.nombre=nombre;
        usuario.contrasena=contrasena;
        usuario.correo=correo;
        usuario.telefono=telefono;
    }else{
        return alert("Hubo un error vuelva a intentarlo");
    }
    console.log(usuario);
    alert("Sus datos fueron guardados correctamente. \n Usuario: "+usuario.credencial +"\n Nombre: "+usuario.nombre+"\n Contraseña: "+usuario.contrasena+"\n Correo: "+usuario.correo+"\n Teléfono: "+usuario.telefono);
};  
console.log(usuario);




//INGRESO USUARIO EXISTENTE

const iniciarCuenta = document.getElementById("ingresarCuenta");

iniciarCuenta.onclick = function iniciarUsuario(){
    let credencial=prompt("Ingrese Usuario: ");
    let contrasena=prompt("Ingresar contraseña: ");
    if(credencial !=usuario.credencial || contrasena!=usuario.contrasena){
        return alert("El usuario o contraseña son inválidos, vuelva a intentar.")
    }else if(credencial===usuario.credencial && contrasena===usuario.contrasena){
        alert("Bienvenidx, "+ usuario.nombre);
    }else{
        return alert ("Ocurrió un error, vuelva a intentar en unos segundos.");
    }
}
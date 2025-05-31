
//REGISTRO DE USUARIO NUEVO

const usuario= [];
const crearCuenta = document.getElementById("cuentaNueva");

crearCuenta.onclick= function crearUsuario(){
    let credencial=prompt("Ingresar credencial como usuario: ");
    if (usuario[0] === credencial){
        alert("Ya existe usuario con esta credencial") 
        return;
    }else if(usuario!="" || usuario!=null) {
        usuario.splice(0,usuario.length);
    }
    while(credencial === ""){
        credencial=prompt("Ingresar credencial como usuario: ");
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
        usuario.push(credencial,contrasena,correo,telefono);
    }else{
        return alert("Hubo un error vuelva a intentarlo");
    }
    console.log(usuario);
    alert("Sus datos fueron guardados correctamente. \n Usuario: "+usuario[0] +"\n Contraseña: "+usuario[1]+"\n Correo: "+usuario[2]+"\n Teléfono: "+usuario[3]);
};  

//INGRESO USUARIO EXISTENTE


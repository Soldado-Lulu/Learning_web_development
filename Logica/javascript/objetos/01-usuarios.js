
function crearUsuario(name, email){
    return {
        email:email,
        name: name,
        activo: false,
        recuperarClave:function(){
            console.log('recuperando calve .....');
        },
    };
}


let user1 = crearUsuario('erick', 'vasquez@gmail.com');
let user2 = crearUsuario('america', 'rojas@gmail.com');
console.log(user1,user2 );
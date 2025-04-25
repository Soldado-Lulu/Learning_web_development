let email = 'erick@holamundo.io';
let name = 'erick';
let direccion = {
    calle : 'Queen st',
    nuemro :15,
};


let user = {
    email: 'erick@holamundo.io',
    name : 'erick',
    direccion : {
        calle : 'Queen st',
        nuemro :15,
    },
    activo :true,
    recuperarClave:function () {
        console.log('REcuperando clave ....');
    },
};


// Crear un objeto básico
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero",
};

console.log(persona.nombre); // "Juan"

//FREEZE
const objetoCongelado = {
    nombre: "María",
    edad: 25,
};

// Congelar el objeto
Object.freeze(objetoCongelado);

// Intentar modificar el objeto
objetoCongelado.nombre = "Ana"; // No tiene efecto
objetoCongelado.apellido = "García"; // No tiene efecto
delete objetoCongelado.edad; // No tiene efecto

console.log(objetoCongelado); // { nombre: "María", edad: 25 }

//SEAL
const usuario = {
    nombre: "Andrea",
    estado: "Activo",
};
// Sellar para evitar agregar/eliminar propiedades, pero permitiendo actualizaciones
Object.seal(usuario);

// Actualización permitida
usuario.estado = "Inactivo";

console.log(usuario); // { nombre: "Andrea", estado: "Inactivo" }

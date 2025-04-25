//calcular numero impares

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i); // Imprime números impares
    }
}

/*let array = [2,5,7,15,-5,-100,55];
let menor = Math.min(...array);
let mayor = Math.max(...array);

console.log("Menor:", menor); // 1
console.log("Mayor:", mayor); // 9

console.log("-----------------------------------------------------");
//OTRO METODO

function getMenorMayor(arr){
    let _menor = arr[0];
    let _mayor = arr[0];
    for(numero of arr){
        _menor=_menor < numero ? _menor : numero;
        _mayor=_mayor > numero ? _mayor : numero;

    }

    return [_menor ,_mayor];
}
function analizarPositivos(arr) {
    let cantidad = 0;
    let positivos = []; // Array para almacenar los positivos

    for (let valor of arr) {
        if (valor > 0) {
            cantidad++;       // Incrementar el contador
            positivos.push(valor); // Agregar el número positivo al array
        }
    }

    return {
        cantidad,  // Devuelve la cantidad de positivos
        positivos, // Devuelve el array de positivos
    };
}
let resultado = analizarPositivos(array);
console.log(resultado.cantidad+ " ----- "+ resultado.positivos);
*/

const array = [10, 20, 30];
const objeto = { a: 1, b: 2, c: 3 };

// 1. for clásico
for (let i = 0; i < array.length; i++) {
    console.log(`for clásico: ${array[i]}`);
}

// 2. for...of
for (let valor of array) {
    console.log(`for...of: ${valor}`);
}

// 3. for...in (No recomendado para arrays)
for (let indice in array) {
    console.log(`for...in: índice=${indice}, valor=${array[indice]}`);
}

// 4. forEach
array.forEach((valor, indice) => {
    console.log(`forEach: índice=${indice}, valor=${valor}`);
});


console.log("-----------------------------------------------------");

// ==========================
// Aquí comienza for clásico
// ==========================
const usuarios = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 17 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "María", edad: 15 },
];

let mayores = [];
let menores = [];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].edad >= 18) {
        mayores.push(usuarios[i]);
    } else {
        menores.push(usuarios[i]);
    }
}

console.log("Mayores de edad:", mayores);
console.log("Menores de edad:", menores);
console.log("-----------------------------------------------------");

// =========================
// Aquí comienza for...of
// =========================
const carrito = [
    { producto: "Camisa", precio: 20 },
    { producto: "Pantalón", precio: 40 },
    { producto: "Zapatos", precio: 60 },
];

let total = 0;

for (const item of carrito) {
    total += item.precio;
}

console.log(`Total del carrito: $${total}`);
console.log("-----------------------------------------------------");

// =========================
// Aquí comienza for...in
// =========================
const configuracion = {
    host: "localhost",
    puerto: 8080,
    protocolo: "http",
};

for (let clave in configuracion) {
    console.log(`Clave: ${clave}, Valor: ${configuracion[clave]}`);
}
console.log("-----------------------------------------------------");

// =========================
// Aquí comienza forEach
// =========================
let productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Tablet", precio: 500 },
    { nombre: "Smartphone", precio: 800 },
];

// Aplicar un descuento del 10%
productos.forEach((producto) => {
    producto.precio -= producto.precio * 0.1;
});

console.log("Productos con descuento:", productos);
console.log("-----------------------------------------------------");

// ===========================================
// Aquí comienza combinación de bucles
// ===========================================
const usuariosRegistrados = [
    { nombre: "admin", password: "1234" },
    { nombre: "usuario1", password: "abcd" },
    { nombre: "usuario2", password: "5678" },
];

const intentos = [
    { nombre: "usuario1", password: "abcd" },
    { nombre: "admin", password: "0000" },
    { nombre: "usuario2", password: "5678" },
];

intentos.forEach((intento) => {
    let valido = false;
    for (let usuario of usuariosRegistrados) {
        if (usuario.nombre === intento.nombre && usuario.password === intento.password) {
            valido = true;
            break;
        }
    }
    console.log(`${intento.nombre}: ${valido ? "Acceso concedido" : "Acceso denegado"}`);
});
console.log("-----------------------------------------------------");

// ======================================
// Aquí comienza ordenación y búsqueda
// ======================================
const calificaciones = [70, 85, 90, 60, 95, 80];

// Ordenar de mayor a menor
calificaciones.sort((a, b) => b - a);
console.log("Calificaciones ordenadas:", calificaciones);

// Encontrar la calificación más alta y más baja
let mayor = calificaciones[0];
let menor = calificaciones[calificaciones.length - 1];
console.log(`Mayor: ${mayor}, Menor: ${menor}`);
console.log("-----------------------------------------------------");

// ===============================================
// Aquí comienza monitoreo en tiempo real (while)
// ===============================================
let eventos = ["Inicio", "Error", "Advertencia", "Fin"];
let index = 0;

while (true) {
    if (index >= eventos.length) break; // Salir cuando no haya más eventos

    console.log(`Evento detectado: ${eventos[index]}`);
    index++;
}
const _objeto = { a: 1, b: 2, c: 3 };
for (let clave in _objeto) {
    console.log(`${clave}: ${_objeto[clave]}`);
}

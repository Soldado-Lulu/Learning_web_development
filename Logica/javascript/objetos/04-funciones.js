function Usuario(nombre){
    this.nombre =nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);


const U = Usuario
let user =new U('Erick');

console.log(user);

function of(Fn , arg){

    return new Fn(arg)
}
let user1 = of(Usuario, 'Chanchito');
console.log(user1);


function returned(){
    return function(){
        console.log('Hola Mundo');
    }
}
let saludo = returned();
saludo();




function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log ('Dibujandoo...');}
}

let punto = {z:7};
Punto.call(punto,1,2);

console.log(punto);


//Punto.apply(punto,[1,2]);




/*
const Point = new Function('x','y',`this.x = x;
    this.y = y;
    this.dibujar = function() {console.log ('Dibujandoo...');}`
);

const p = new Point(1,2);
console.log(p);
*/

//METODO LARGO
/*
function cualEsMayor(a,b){
    if(a>b){
        
        console.log("Mayor es a => "+ a);
    }
    else{
        
        console.log("Mayor es b => "+b);
    }
}
let mayor = cualEsMayor(10,5);
console.log(mayor);
*/
//METODO CORTO
function cualEsMayor(a,b){
    return (a>b) ? a:b;
}
let mayor = cualEsMayor(10,5);
console.log(mayor);
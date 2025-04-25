/*
Nombre :ancho x alto
8k 7680 x 4320
4k  3840 X 2160
WQHD  2560 X 1440
FDH  1920 X 1080
HD   1280 X 720
*/ 

function nombreResolcucion(ancho , alto){
if(ancho >= 7680 && alto >= 4320){
    return console.log("8K");
}
else if (ancho >=3840 && alto >=2160){
    return console.log("4K"); 
}
else if (ancho >=2560 && alto >=1440 ){
    return console.log("WQHD");
}
else if (ancho >=1920 && alto >= 1080 ){
    return console.log("FHD");
}
else{
    return console.log("HD")
}
}

let nombre = nombreResolcucion(2666, 1555);
console.log(nombre);
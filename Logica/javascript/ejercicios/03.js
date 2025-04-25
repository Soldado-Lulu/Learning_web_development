/*


*/

function getbyIdx(arr,idx){
    if( idx < 0 || arr.length <= idx){
        return 'Elemento no existe';
    }
    return arr[idx];

}

let resultado = getbyIdx([1,2,3,4,5], 0 );
console.log(resultado);
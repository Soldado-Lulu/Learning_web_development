let Valor= 0;
function Incrementar(){
    Valor++;
    document.getElementById("Contador").textContent=Valor;
}

function mostrarDatos() {
    // Obtener valores de los campos
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const correo = document.getElementById("correo").value;

    // Mostrar datos en el label
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Hola ${nombre}, tienes ${edad} años y tu correo es ${correo}.`;
  }
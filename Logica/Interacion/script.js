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

  function obtenerUsuarios() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())     // Convertimos la respuesta a JSON
      .then(data => {
        const contenedor = document.getElementById('usuarios');
        contenedor.innerHTML = '';           // Limpiar resultados anteriores

        data.forEach(usuario => {
          const div = document.createElement('div');
          div.className = 'usuario';
          div.innerHTML = `
            <strong>Nombre:</strong> ${usuario.name}<br>
            <strong>Email:</strong> ${usuario.email}<br>
            <strong>Ciudad:</strong> ${usuario.address.city}<br>
            <strong>Zipcode:</strong>${usuario.address.zipcode}
          `;
          contenedor.appendChild(div);
        });
      })
      .catch(error => {
        console.error('Hubo un error al obtener los usuarios:', error);
      });
  }
// Manipulación del DOM
document.getElementById("cambiarTexto").addEventListener("click", () => {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Texto cambiado dinámicamente";
});

document.getElementById("resaltar").addEventListener("click", () => {
    const titulo = document.getElementById("titulo");
    titulo.style.color = "red";
    titulo.style.fontWeight = "bold";
});

// Fetch y Promesas
document.getElementById("cargarUsuarios").addEventListener("click", async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usuarios = await response.json();
        const listaUsuarios = document.getElementById("listaUsuarios");
        listaUsuarios.innerHTML = ""; // Limpiar la lista antes de cargar usuarios

        usuarios.forEach(usuario => {
            const li = document.createElement("li");
            li.textContent = `${usuario.name} (${usuario.email})`;
            listaUsuarios.appendChild(li);
        });
    } catch (error) {
        console.error("Error al cargar usuarios:", error);
    }
});

// Contador con Closure
const crearContador = () => {
    let contador = 0;
    return () => {
        contador++;
        document.getElementById("resultado").textContent = `Contador: ${contador}`;
    };
};
const incrementarContador = crearContador();
document.getElementById("incrementar").addEventListener("click", incrementarContador);

// Módulos Simulados (Funciones Básicas)
document.getElementById("sumar").addEventListener("click", () => {
    const resultado = 5 + 3;
    document.getElementById("resultadoModulos").textContent = `Resultado: ${resultado}`;
});

document.getElementById("restar").addEventListener("click", () => {
    const resultado = 5 - 3;
    document.getElementById("resultadoModulos").textContent = `Resultado: ${resultado}`;
});

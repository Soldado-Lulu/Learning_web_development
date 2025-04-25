// Datos organizados
const datos = {
    variables: {
        nombre: "Juan",
        edad: 25,
        tipos: {
            numero: 42,
            booleano: true,
            indefinido: undefined,
            nulo: null,
            arreglo: [1, 2, 3],
            objeto: { clave: "valor", otroClave: 42 }
        }
    },
    operadores: {
        suma: 5 + 3,
        esMayor: 10 > 5,
        resultado: 10 > 5 ? "Sí" : "No"
    },
    bucles: [0, 1, 2, 3, 4],
    funciones: {
        multiplicar: (a, b) => a * b,
        calcularAreaTriangulo: (base, altura) => (base * altura) / 2
    },
    objetos: {
        estudiante: { nombre: "María", edad: 22 }
    },
    asincronia: "Promesa cumplida",
    clases: {
        animal: "Animal genérico hace un sonido.",
        perro: "Fido ladra."
    },
    manejoErrores: "Algo salió mal",
    funcionesAvanzadas: {
        contador: [1, 2],
        numerosPares: [2, 4, 6, 8],
        promedioPares: 5
    }
};

// Función para renderizar datos en áreas específicas
const renderizarDatos = (datos) => {
    document.getElementById("variables").innerHTML = `
        <h2>1. Variables</h2>
        <ul>
            <li><strong>Nombre:</strong> ${datos.variables.nombre}</li>
            <li><strong>Edad:</strong> ${datos.variables.edad}</li>
            <li><strong>Tipos:</strong> ${JSON.stringify(datos.variables.tipos)}</li>
        </ul>
    `;

    document.getElementById("operadores").innerHTML = `
        <h2>2. Operadores</h2>
        <ul>
            <li><strong>Suma:</strong> ${datos.operadores.suma}</li>
            <li><strong>¿Es mayor?:</strong> ${datos.operadores.resultado}</li>
        </ul>
    `;

    document.getElementById("bucles").innerHTML = `
        <h2>3. Bucles</h2>
        <ul>
            ${datos.bucles.map((i) => `<li>Iteración: ${i}</li>`).join("")}
        </ul>
    `;

    document.getElementById("funciones").innerHTML = `
        <h2>4. Funciones</h2>
        <ul>
            <li><strong>Multiplicar 4 x 6:</strong> ${datos.funciones.multiplicar(4, 6)}</li>
            <li><strong>Área de triángulo:</strong> ${datos.funciones.calcularAreaTriangulo(10, 5)}</li>
        </ul>
    `;

    document.getElementById("objetos").innerHTML = `
        <h2>5. Objetos</h2>
        <p><strong>Estudiante:</strong> ${JSON.stringify(datos.objetos.estudiante)}</p>
    `;

    document.getElementById("asincronia").innerHTML = `
        <h2>6. Asincronía</h2>
        <p>${datos.asincronia}</p>
    `;

    document.getElementById("clases").innerHTML = `
        <h2>7. Clases</h2>
        <ul>
            <li>${datos.clases.animal}</li>
            <li>${datos.clases.perro}</li>
        </ul>
    `;

    document.getElementById("errores").innerHTML = `
        <h2>8. Errores</h2>
        <p>${datos.manejoErrores}</p>
    `;

    document.getElementById("funcionesAvanzadas").innerHTML = `
        <h2>9. Funciones Avanzadas</h2>
        <ul>
            <li><strong>Contador:</strong> ${datos.funcionesAvanzadas.contador.join(", ")}</li>
            <li><strong>Números pares:</strong> ${datos.funcionesAvanzadas.numerosPares.join(", ")}</li>
            <li><strong>Promedio:</strong> ${datos.funcionesAvanzadas.promedioPares}</li>
        </ul>
    `;
};

// Renderizar los datos
renderizarDatos(datos);

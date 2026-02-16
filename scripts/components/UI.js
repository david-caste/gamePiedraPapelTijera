//Ocultar y Mostrat secciones
export function ocultarMostrar(ocultar = [], mostrar = []) {
    ocultar.forEach(element => element.style.display = 'none');
    mostrar.forEach(element => element.style.display = 'flex');
}

//inserción personajes en el DOM
export function renderizarOpcionesPersonajes(contenedor, lista){
    contenedor.innerHTML = lista.map((personaje) => `
        <input type="radio" name="personaje" id=${personaje.nombre} style="display:none"/>
        <label class="tarjeta-personaje" for=${personaje.nombre}>
            <p class="${personaje.nombre}">${personaje.nombre}</p>
            <img src=${personaje.img} alt=${personaje.nombre}>
        </label>
    `).join("");
}

//Resalta visualmente el personaje seleccionado
export function resaltarSeleccion(e, contenedor, personajeSeleccionado, listaPersonajes) {
    if(e.target.tagName === "IMG") {
        const imagenes = contenedor.querySelectorAll("img");
        imagenes.forEach(img => img.classList.remove("selected"));
        e.target.classList.add("selected");

        personajeSeleccionado = listaPersonajes.find(p => p.nombre === e.target.alt);
        
        console.log("Datos del objeto rescatado:", personajeSeleccionado);
    }
    return personajeSeleccionado;
}

//Limpia la pantalla dejando solo el personaje elegido por el usuario
export function limpiarPantalla(personajeSeleccionado){
    const todosLosLabels = document.querySelectorAll('.tarjeta-personaje');
    todosLosLabels.forEach((label) => {
        if(!label.contains(personajeSeleccionado)){
            label.style.display = 'none';
        }
    });
}

//Crea los botones de ataque dinámicamente
export function renderizarAtaques(contenedor, personajeSeleccionado){
    contenedor.innerHTML = "";
    personajeSeleccionado.ataques.forEach((ataque) => {
        contenedor.innerHTML += `
            <button id="${ataque.id}" class="btn-ataque">
                ${ataque.nombre}
            </button>
        `;
    });
}

///Muestra el resumen visual del combate
export function mostrarDetalleCombate(config) {
    const { 
        nodos, // { jugador, enemigo, resultado }
        datosJugador, // { img, nombre, ataque }
        datosEnemigo  // { img, nombre, ataque }
    } = config;

    nodos.jugador.innerHTML = `
        <img src="${datosJugador.img}" alt="${datosJugador.nombre}">
        <p>Jugador: ${datosJugador.ataque}</p>
    `;

    nodos.enemigo.innerHTML = `
        <img src="${datosEnemigo.img}" alt="${datosEnemigo.nombre}">
        <p>Enemigo: ${datosEnemigo.ataque}</p>
    `;

    nodos.resultado.innerHTML = `<p>Resultado del combate: ${config.resultado}</p>`;
}

//vista en 5 segundos
export function vistaRealentizada(ocultar = [], mostrar = [], tiempo){
    setTimeout(() => {//volver a vista anterior en 5 segundos
            ocultarMostrar(ocultar, mostrar);
        }, tiempo);
}
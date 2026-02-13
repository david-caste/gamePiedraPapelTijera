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
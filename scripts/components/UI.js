//Ocultar y Mostrat secciones
export function ocultarMostrar(ocultar = [], mostrar = []) {
    ocultar.forEach(element => element.style.display = 'none');
    mostrar.forEach(element => element.style.display = 'flex');
}

export function renderizarOpcionesPersonajes(contenedor, lista){
    contenedor.innerHTML = lista.map((personaje) => `
        <input type="radio" name="personaje" id=${personaje.nombre} style="display:none"/>
        <label class="tarjeta-personaje" for=${personaje.nombre}>
            <p class="${personaje.nombre}">${personaje.nombre}</p>
            <img src=${personaje.img} alt=${personaje.nombre}>
        </label>
    `).join("");
}
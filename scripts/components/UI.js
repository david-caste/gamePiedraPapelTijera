//Ocultar y Mostrat secciones
export function ocultarMostrar(ocultar = [], mostrar = []) {
    ocultar.forEach(element => element.style.display = 'none');
    mostrar.forEach(element => element.style.display = 'flex');
}

//importaciones

//Personajes
import {listaPersonajes} from "./scripts/config/personajes.js";

//Lógica del juego
import { interpretarAtaqueJugador, ataqueEnemigo, combate, personajeEnemigo } from "./scripts/core/gameLogic.js";

//Ocultar - Mostrar secciones
import { ocultarMostrar, renderizarOpcionesPersonajes, resaltarSeleccion } from "./scripts/components/UI.js";

//Menú
const vistaMenuInicial = document.querySelector(".container-menu");
//Elección Personaje
const seccionEleccionPersonaje = document.getElementById("seleccion-personaje");
const opcionPersonajesContainer = document.getElementById("skin-personaje");

//Sección ataque
const skinJugador = document.getElementById("ataques-jugador");
const seccionAtaque = document.getElementById("ataque");

let personajeElegido;

//sección muestra de combate
const seccionCombateMuestra = document.getElementById("combate-muestra");
const CombateJugador = document.getElementById("jugador");
const CombateEnemigo = document.getElementById("enemigo");
const resultadoBatalla = document.getElementById("resultado-batalla");

//Botones
const botonSeleccionarPersonaje = document.getElementById("eleccion-personajes");
const botonMenu = document.getElementById("btn-menu");
const continuarAtaque = document.querySelector(".contenedor-btn-continuar-ataque");

//Variables
let personajeSeleccionado;
let eleccionEnemigo;
let ataqueJugador;
let contenedorJugador;
let contenedorEnemigo;

//Ocultar elección ataque y eleccion de personaje
ocultarMostrar([seccionEleccionPersonaje, seccionAtaque, continuarAtaque], []);

//Inserción personajes en el DOM
renderizarOpcionesPersonajes(opcionPersonajesContainer, listaPersonajes);

//Boton inicio menu
botonMenu.addEventListener("click", () => {
    ocultarMostrar([vistaMenuInicial], [seccionEleccionPersonaje]);
});

//Mantener personaje seleccionado
opcionPersonajesContainer.addEventListener("click", (e) => {
    personajeSeleccionado = resaltarSeleccion(e, opcionPersonajesContainer, personajeSeleccionado, listaPersonajes);
});

// Validación al presionar el botón "Seleccionar"
botonSeleccionarPersonaje.addEventListener("click", () => {
    personajeElegido = document.querySelector('#skin-personaje img.selected');
    
    //Eliminar imagenes no selecionadas
    if(personajeElegido){
        const todosLosPersonajes = document.querySelectorAll('#skin-personaje img');
        const todosLosLabels = document.querySelectorAll('.tarjeta-personaje');
        todosLosPersonajes.forEach((img) => {
            if(!img.classList.contains("selected")) {
                img.style.display = "none";
            }
        // 2. Filtramos: ocultamos los que NO contienen la imagen seleccionada    
        todosLosLabels.forEach((label) => {
            // Buscamos si la imagen seleccionada está dentro de este label
            if (!label.contains(personajeElegido)) {
                label.style.display = 'none';
            }
        });
        });
    }

    if (personajeElegido) {
        alert("¡Has elegido a tu personaje!");
        botonSeleccionarPersonaje.style.display = "none";
        seccionAtaque.style.display = "flex";
        continuarAtaque.style.display = "flex";
        personajeSeleccionado.ataques.forEach((ataque) => {
            skinJugador.innerHTML += `
                <button id="${ataque.id}" class="btn-ataque">
                    ${ataque.nombre}
                </button>
            `;
        });
        
    } else {
        alert("Por favor, selecciona una skin primero.");
    }
});

//Eventos botones ataque

//Boton seleccionado ataque
skinJugador.addEventListener('click', (e) => {
    // Verificamos que el clic sea en un botón de ataque
    if (e.target.classList.contains('btn-ataque')) {
        ataqueJugador = e.target.innerText; // Guardamos el emoji o nombre
        ataqueJugador = interpretarAtaqueJugador(ataqueJugador); // Convertimos el emoji a su nombre correspondiente
        eleccionEnemigo = ataqueEnemigo(personajeSeleccionado);
    }
});

//Ejecutar combate al presionar continuar
continuarAtaque.addEventListener('click', () => {
    let resultado = combate(ataqueJugador, eleccionEnemigo);
    let personajeEnemigoSeleccionado = personajeEnemigo(listaPersonajes);

    //Jugador
    contenedorJugador = `
    <img src=${personajeSeleccionado.img} alt=${personajeSeleccionado.nombre}">
    <p>Jugador: ${ataqueJugador}</p>
    `;

    //Enemigo
    contenedorEnemigo = `
    <img src=${personajeEnemigoSeleccionado.img} alt=${personajeEnemigoSeleccionado.nombre}">
    <p>Enemigo: ${eleccionEnemigo}</p>
    `;
    CombateJugador.innerHTML = contenedorJugador;
    CombateEnemigo.innerHTML = contenedorEnemigo;

    ocultarMostrar([seccionAtaque, continuarAtaque, seccionEleccionPersonaje, seccionCombateMuestra], [seccionCombateMuestra])

    resultadoBatalla.innerHTML = `<p>Resultado del combate: ${resultado}</p>`;

    console.log("Jugador:", ataqueJugador, "Enemigo:", eleccionEnemigo, " Resultado del combate:", resultado);
});
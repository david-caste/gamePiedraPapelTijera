//importaciones

//Personajes
import {listaPersonajes} from "./scripts/config/personajes.js";

//Lógica del juego
import { interpretarAtaqueJugador, ataqueEnemigo, combate, personajeEnemigo } from "./scripts/core/gameLogic.js";

//Ocultar - Mostrar secciones
import { ocultarMostrar, renderizarOpcionesPersonajes, resaltarSeleccion, limpiarPantalla, renderizarAtaques, mostrarDetalleCombate } from "./scripts/components/UI.js";

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
    limpiarPantalla(personajeElegido);

    // Validar si se ha seleccionado un personaje
    if (personajeElegido) {
        alert("¡Has elegido a tu personaje!");
        ocultarMostrar([botonSeleccionarPersonaje], [seccionAtaque, continuarAtaque]);
        renderizarAtaques(skinJugador, personajeSeleccionado);// Renderizar ataques del personaje seleccionado
        
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

    // Creamos el objeto config con los datos que pide la función
    const configCombate = {
        nodos: {
            jugador: CombateJugador,
            enemigo: CombateEnemigo,
            resultado: resultadoBatalla
        },

        datosJugador: {
            img: personajeSeleccionado.img,
            nombre: personajeSeleccionado.nombre,
            ataque: ataqueJugador
        },

        datosEnemigo: {
            img: personajeEnemigoSeleccionado.img,
            nombre: personajeEnemigoSeleccionado.nombre,
            ataque: eleccionEnemigo
        },

        resultado: resultado
    };

    mostrarDetalleCombate(configCombate);

    ocultarMostrar([seccionAtaque, continuarAtaque, seccionEleccionPersonaje, seccionCombateMuestra], [seccionCombateMuestra])

    console.log("Jugador:", ataqueJugador, "Enemigo:", eleccionEnemigo, " Resultado del combate:", resultado);
});
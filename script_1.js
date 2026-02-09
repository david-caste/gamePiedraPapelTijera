//Menú
const vistaMenuInicial = document.querySelector(".container-menu");
//Elección Personaje
const seccionEleccionPersonaje = document.getElementById("seleccion-personaje");
const opcionPersonajesContainer = document.getElementById("skin-personaje");

//Datos ataque
const skinJugador = document.getElementById("etiqueta-jugador");

//Botones
const botonSeleccionarPersonaje = document.getElementById("eleccion-personajes");
const botonMenu = document.getElementById("btn-menu");
//Variables
let personajes = [];
let opcionPersonajes;

//Clase personaje
class personaje {
    constructor(nombre, img) {
        this.nombre = nombre;
        this.img = img;
        this.ataques = [];
    }
}

//Inserción de personajes
let personajeUno = new personaje("Warrior", './img/character_1.webp');
let personajeDos = new personaje("Mage", './img/character_3.jpg');
let personajeTres = new personaje("Archer", './img/character_2.webp');

//Ataques de personajes
personajeUno.ataques.push(
    {nombre: "✂", id: "btn-tijera"},
    {nombre: "🥌", id: "btn-piedra"},
    {nombre: "📄", id: "btn-papel"}
)

personajeDos.ataques.push(
    {nombre: "✂", id: "btn-tijera"},
    {nombre: "🥌", id: "btn-piedra"},
    {nombre: "📄", id: "btn-papel"}
)

personajeTres.ataques.push(
    {nombre: "✂", id: "btn-tijera"},
    {nombre: "🥌", id: "btn-piedra"},
    {nombre: "📄", id: "btn-papel"}
)

//Ocultar elección personaje
seccionEleccionPersonaje.style.display = "none";

personajes.push(personajeUno, personajeDos, personajeTres);

personajes.forEach((personaje) => {
    opcionPersonajes = `
    <input type="radio" name="personaje" id=${personaje.nombre} style="display:none"/>
    <label class="tarjeta-personaje" for=${personaje.nombre}>
        <p>${personaje.nombre}</p>
        <img src=${personaje.img}>
    </label>
    `;
    //Personajes agregados en HTML
    opcionPersonajesContainer.innerHTML += opcionPersonajes;
});

//Sección Skin personaje oculto
skinJugador.style.display = "none";

//Input personajes
const inputPersonajeUno = document.getElementById("personajeUno");
const inputPersonajeDos = document.getElementById("personajeDos");
const inputPersonajeTres = document.getElementById("personajeTres");

//Selección de personaje
botonSeleccionarPersonaje.addEventListener("click", () => {
    if(inputPersonajeUno.checked) {
        skinJugador.innerHTML = personajeUno.nombre;
    }
    else if(inputPersonajeDos.checked) {
        skinJugador.innerHTML = personajeDos.nombre;
    }
    if(inputPersonajeTres.checked) {
        skinJugador.innerHTML = personajeTres.nombre;
    }
    else {
        alert("Selecciona un personaje");
    }
});

//Boton inicio menu
botonMenu.addEventListener("click", () => {
    vistaMenuInicial.style.display = "none";
    seccionEleccionPersonaje.style.display = "flex";
});
//Funciones
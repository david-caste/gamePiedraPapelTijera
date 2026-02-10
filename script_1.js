//Menú
const vistaMenuInicial = document.querySelector(".container-menu");
//Elección Personaje
const seccionEleccionPersonaje = document.getElementById("seleccion-personaje");
const opcionPersonajesContainer = document.getElementById("skin-personaje");

//Sección ataque
const skinJugador = document.getElementById("etiqueta-jugador");
const seccionAtaque = document.getElementById("ataque");

//Botones
const botonSeleccionarPersonaje = document.getElementById("eleccion-personajes");
const botonMenu = document.getElementById("btn-menu");
const continuarAtaque = document.querySelector(".contenedor-btn-continuar-ataque");
//Variables
let personajes = [];
let opcionPersonajes;
let personajeSeleccionado;
let datosPersonaje;

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
let personajeDos = new personaje("Mage", './img/character_1.webp');
let personajeTres = new personaje("Archer", './img/character_1.webp');

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
        <p class="${personaje.nombre}">${personaje.nombre}</p>
        <img src=${personaje.img} alt=${personaje.nombre}>
    </label>
    `;
    //Personajes agregados en HTML
    opcionPersonajesContainer.innerHTML += opcionPersonajes;
});

//Sección Skin personaje oculto
skinJugador.style.display = "none";
//Sección ataque oculto
seccionAtaque.style.display = "none";
continuarAtaque.style.display = "none";

//Input personajes
const inputPersonajeUno = document.getElementById("personajeUno");
const inputPersonajeDos = document.getElementById("personajeDos");
const inputPersonajeTres = document.getElementById("personajeTres");

//Boton inicio menu
botonMenu.addEventListener("click", () => {
    vistaMenuInicial.style.display = "none";
    seccionEleccionPersonaje.style.display = "flex";
});

//Mantener personaje seleccionado
opcionPersonajesContainer.addEventListener("click", (e) => {
    // Verificamos que se hizo clic en una imagen
    if(e.target.tagName === "IMG") {
        // 1. Quitamos la clase 'selected' de cualquier otra imagen
        const imagenes = opcionPersonajesContainer.querySelectorAll("img");
        imagenes.forEach(img => img.classList.remove("selected"));

        // 2. Añadimos la clase a la imagen clicada
        e.target.classList.add("selected");
        
        // RESCATE DE INFORMACIÓN:
        // Buscamos en el array 'personajes' el objeto que tenga el mismo nombre que el 'alt' de la imagen
        personajeSeleccionado = personajes.find(p => p.nombre === e.target.alt);
        
        console.log("Datos del objeto rescatado:", personajeSeleccionado);
    }
});

// Validación al presionar el botón "Seleccionar"
botonSeleccionarPersonaje.addEventListener("click", () => {
    const personajeElegido = document.querySelector('#skin-personaje img.selected');
    
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
            seccionAtaque.innerHTML += `
                <button id="${ataque.id}" class="btn-ataque">
                    ${ataque.nombre}
                </button>
            `;
        });
        
    } else {
        alert("Por favor, selecciona una skin primero.");
    }
})

//Mostrar personaje seleccionado


//Funciones

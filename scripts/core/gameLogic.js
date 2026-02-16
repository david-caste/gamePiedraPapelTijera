//Elección ataque jugador
export function interpretarAtaqueJugador(ataqueJugador){
    let ataqueEscogidoJugador;
    if (ataqueJugador == "✂") {
        ataqueEscogidoJugador = "tijera";
    }else if (ataqueJugador == "🥌") {
        ataqueEscogidoJugador = "piedra";
    }else if (ataqueJugador == "📄") {
        ataqueEscogidoJugador = "papel";
    }
    return ataqueEscogidoJugador;
}

//Elección ataque enemigo
 export function ataqueEnemigo(personajeSeleccionado){
    let eleccion = aleatorio(0, personajeSeleccionado.ataques.length - 1);
    let eleccionEnemigo;
    if(eleccion == 0){
        eleccionEnemigo = "tijera";
    }else if(eleccion == 1){
        eleccionEnemigo = "piedra";
    }else if(eleccion == 2){
        eleccionEnemigo = "papel";
    }
    return eleccionEnemigo;
}

//combate
export function combate(ataqueJugador, eleccionEnemigo){
    if(ataqueJugador == eleccionEnemigo){
        return "Empate";
    }else if((ataqueJugador == "tijera" && eleccionEnemigo == "papel") || (ataqueJugador == "papel" && eleccionEnemigo == "piedra") || (ataqueJugador == "piedra" && eleccionEnemigo == "tijera")){
        return "Ganaste";
    }else{
        return "Perdiste";
    }
}

//Elección personaje enemigo
export function personajeEnemigo(personajes){
    let eleccion = aleatorio(0, personajes.length - 1);
    console.log(personajes[eleccion]);
    return personajes[eleccion];
}

//decidir un ganador
export function elegirGanador(resultado){
    let contenedorJugador;
    let contenedorEnemigo;

    for (; contenedorJugador || contenedorEnemigo < 4;) {
        if(resultado == "Empate"){
            contenedorJugador += 0;
            contenedorEnemigo += 0;
        }else if(resultado == "Ganaste"){
            contenedorJugador++;
        }else{
            contenedorEnemigo++;
        }
    }
}

//aleatoridad
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
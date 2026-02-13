import { personaje } from "../models/Personaje.js";

export const listaPersonajes = [
    new personaje("Warrior", '../../img/character_1.webp'),
    new personaje("Mage", '../../img/character_1.webp'),
    new personaje("Archer", '../../img/character_1.webp')
];

listaPersonajes.forEach((p) => {
    p.ataques.push(
        {nombre: "✂", id: "btn-tijera"},
        {nombre: "🥌", id: "btn-piedra"},
        {nombre: "📄", id: "btn-papel"}
    );
});
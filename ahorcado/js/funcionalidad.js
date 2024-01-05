function generacionPalabra(arrayPalabra, arrayFormacion) {
    let intentosFallidos = 0;
    let letrasIngresadas = [];

    while (intentosFallidos < 7) {//Se cierrra al exceder los 7 intentos fallidos
        const userInput = prompt("Ingrese una letra").toLowerCase();

        // Verificar si la letra ya ha sido ingresada
        if (letrasIngresadas.includes(userInput)) {
            console.log("Ya has ingresado esta letra. Intenta con otra.");
            continue; // Vuelve al inicio del bucle
        }

        letrasIngresadas.push(userInput); // Almacenar la letra ingresada

        if (arrayPalabra.includes(userInput)) {
            for (let j = 0; j < arrayPalabra.length; j++) {
                if (arrayPalabra[j] === userInput) {
                    arrayFormacion[j] = userInput;
                }
            }

            console.log("¡Letra correcta!");
            console.log("Palabra actual: " + arrayFormacion.join(' '));

            if (arrayFormacion.join('') === arrayPalabra.join('')) {
                console.log("¡Felicidades 🎉 🎉 🎉! Has adivinado la palabra: " + arrayPalabra.join(''));
                return; // Terminar la función
            }
        } else {
            console.log("La letra no se encuentra.");
            intentosFallidos++;
            console.log("Intentos fallidos: " + intentosFallidos);
        }
    }

    console.log("¡Perdiste 😔😔😔! La palabra era: " + arrayPalabra.join(''));
}

const palabras = [['p', 'r', 'o', 'g', 'r', 'a', 'm', 'a', 'c', 'i', 'o', 'n'],
                  ['r', 'i', 'w', 'i'],
                  ['c', 'o', 'm', 'p', 'u', 't', 'a', 'd', 'o', 'r']];

let palabraAleatoria = Math.floor(Math.random() * palabras.length);
let palabraSeleccionada = palabras[palabraAleatoria];
let espacios = Array(palabraSeleccionada.length).fill('_');

generacionPalabra(palabraSeleccionada, espacios);
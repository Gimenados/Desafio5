//Declaro las variables que voy a usar en el bucle for y en if. Necesito usar if para las diferentes condiciones de los emoji
let cantidadDeGatos = 10;
let emoji;

for (let i = 1; i <= cantidadDeGatos; i++) { //Bucle for condicionamos los numeros del 1 al 10
    if (i % 3 === 1){  //Primera condicion
        emoji = "😺";
    } else if (i % 3 === 2) { //Segunda condicion
        emoji = "😸";
    } else {  // Tercera condicion
        emoji = "😹";
    }
     console.log(`Gato#${i}: ${emoji}`)
}






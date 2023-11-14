let cantidadDeGatos = 10;
let cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) { //Yo se que los dos gatos 1 y 2 son divisibles a 2 entonces por cada diferencia de resto a cada uno le igualo 2
    if (i % 2 === 1 ){
        emoji = "🐈";
    } else if (i % 2 === 0 ){
        emoji = "🐈‍⬛";
    }
 
    pasosEmoji = "🐾".repeat(cantidadDePasos);

  console.log(`Gatos #${i} ${emoji} ${pasosEmoji}`)

}
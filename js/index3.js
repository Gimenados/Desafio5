let cantidadDeGatos = 10;
let cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
    if (i % 2 === 1 ){
        emoji = "🐈";
    } else if (i % 2 === 0 ){
        emoji = "🐈‍⬛";
    }
 
    pasosEmoji = "🐾".repeat(cantidadDePasos);

  console.log(`Gatos #${i} ${emoji} ${pasosEmoji}`)

}
let cantidadDeGatos = 5;
let cantidadDePasos = 4;

for (var i = 1; i <= cantidadDeGatos; i++) {
    
    let pasosEmoji = "🐾".repeat(cantidadDePasos);
    let gatosEmoji = "🐈".repeat(cantidadDeGatos);
    
   
   console.log(`Gatos #${i} ${pasosEmoji} ${gatosEmoji}`);

}
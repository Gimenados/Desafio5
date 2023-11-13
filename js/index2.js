var cantidadDeGatos = 5;
var cantidadDePasos = 5;

for (var i = 1; i <= cantidadDeGatos; i++) {
    
    var pasosEmoji = "🐾".repeat(cantidadDePasos);
    var gatosEmoji = "🐈".repeat(cantidadDeGatos);
    
   
console.log(`Gatos #${i} ${pasosEmoji} ${gatosEmoji}`);
}
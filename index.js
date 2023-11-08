console.log(`Hola soy Gimena y estas son mis primera backticks`);

let cantidadDeGatos = 10; //Declaro variable y le doy un valor

//i = 1 Porque arranco del 1 ; i menor o igual a cantidadDeGatos porque tienen q ser numeros menores a 10  
for (let i = 1; i <= cantidadDeGatos; i++) { 
//Declaro la variable emoji y le doy su valor
    let emoji = i % 3 === 1 ? "😺" : (i % 3 === 2 ? "😸" : "😹");
    console.log(`Gato #${i}: ${emoji}`)
}


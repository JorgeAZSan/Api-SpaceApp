function uno () {
    console.log("uno")
    dos()
}

function dos () {
    console.log("dos")
    tres()
}

setTimeout(uno,5000)
dos()

const nombre = function () {
    console.log("Nombre")
}

nombre()

const persona = () =>{
    
}


















//Función asincrona
// Los Callbacks en Javascript son, de hecho, 
// funciones que se pasan como argumentos a otras 
// funciones y se ejecutan después de que esa función 
// haya terminado.
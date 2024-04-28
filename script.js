const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15"


// Fetch para apis 
async function listaImagenes() {
    try {
        let fetchImagen = await fetch(url)
        let datosImagenes = await fetchImagen.json()

        console.log(datosImagenes)

        const card = document.querySelector("[data-ul]")

        datosImagenes.forEach(elemento => {
            const contenido = 
            `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>
            `
            card.innerHTML = card.innerHTML + contenido
        })
    } 
    catch (error){
        console.log(error)
    }
}

listaImagenes()

// function listaImagenes(){
//     fetch(url)
//     .then( response => response.json()) // Solicitud Aceptada
//     .then(datosImagenes => {
//         console.log(datosImagenes)

//         const card = document.querySelector("[data-ul]")

//         datosImagenes.forEach(elemento => {
//             const contenido = `<li class="card">
//             <img class="card__image" src="${elemento.url}" alt="imagen">
//             <h3 class="card__title">${elemento.title}</h3>
//         </li>
//             `
//             card.innerHTML = card.innerHTML + contenido
//         })
    
//     })  
//     .catch(eror  => console.log(eror)) //Solicitud rechazada

// }

// listaImagenes()








    
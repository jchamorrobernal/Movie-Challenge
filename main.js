// Funciones Exportadas

import { getAnswer, movieSelector, cardTemplate } from './app.js'

// Manipulación DOM

const movieSort = document.getElementById('moviesort');
const searchbar = document.getElementById('searchbar')
const tituloHome = document.getElementById('title')
const magnifier = document.getElementById('magnifiericon')

// Interaccion header y footer

tituloHome.addEventListener('click', function() {
    window.location.replace("./index.html")
    });

const aboutUs = document.getElementById('about')

aboutUs.addEventListener('click', function() 
    { window.location.replace('./aboutus.html')}
    )
    
const contact= document.getElementById('contact')
    
contact.addEventListener('click', function() 
    { window.location.replace('./contact.html')}
    )

// Card template

// window.forEach(cardTemplate(indexMovies))

// searchbar

searchbar.addEventListener('keyup', function(event) {
    if (event.keyCode == 13 ) {
        console.log(searchbar.value)
        const searchValue = searchbar.value
        getAnswer(searchValue)
    }
})

magnifier.addEventListener('click', function(event) {
   const searchValue = searchbar.value;
   getAnswer(searchValue)
    
})

// sort movies

movieSort.addEventListener('change', () => {
    const selectorValue = movieSort.value;
    movieSelector(selectorValue);
}
)
// footer

/*
const tarjeta = (data) => {
    
    for (let i = 0; i < data.length; i++) {
        console.log(data + "dentro de la función")
        fetch(data)
        .then(res => res.json() ) 
        .then(data => {
        console.log(data)
        main.innerHTML += 
        `<article id="card" class="card">
            <img src='${data.Poster}' id="cover" class="cover">
            <div id="datacard" class="datacard">
            <p id="movietitle">${data.Title}</p>
            <p id="moviegenre">${data.Genre}</p>
            <p id="movieorigin">${data.Country}</p>
            </div>
        </article>`
    })
    }
}

tarjeta(arrayUrl)
*/
// Card creation 
/*

    fetch(url1) 

    .then(res => res.json() ) 
    .then(data => {
        main.innerHTML += 
        `<article id="card" class="card">
            <img src='${data.Poster}' id="cover" class="cover">
            <div id="datacard" class="datacard">
            <p id="movietitle">${data.Title}</p>
            <p id="moviegenre">${data.Genre}</p>
            <p id="movieorigin">${data.Country}</p>
            </div>
        </article>`
    })
    
    fetch(url2)

    .then(res => res.json() ) 
    .then(data => {
        main.innerHTML += 
        `<article id="card" class="card">
            <img src='${data.Poster}' id="cover" class="cover">
            <div id="datacard" class="datacard">
            <p id="movietitle">${data.Title}</p>
            <p id="moviegenre">${data.Genre}</p>
            <p id="movieorigin">${data.Country}</p>
            </div>
        </article>`
    })
    
    fetch(url3)

    .then(res => res.json() ) 
    .then(data => {
        main.innerHTML += 
        `<article id="card" class="card">
            <img src='${data.Poster}' id="cover" class="cover">
            <div id="datacard" class="datacard">
            <p id="movietitle">${data.Title}</p>
            <p id="moviegenre">${data.Genre}</p>
            <p id="movieorigin">${data.Country}</p>
            </div>
        </article>`
    })

    fetch(url4)

    .then(res => res.json() ) 
    .then(data => {
        main.innerHTML += 
        `<article id="card" class="card">
            <img src='${data.Poster}' id="cover" class="cover">
            <div id="datacard" class="datacard">
            <p id="movietitle">${data.Title}</p>
            <p id="moviegenre">${data.Genre}</p>
            <p id="movieorigin">${data.Country}</p>
            </div>
        </article>`
    })

    fetch(url5)

    .then(res => res.json() ) 
    .then(data => {
        main.innerHTML += 
        `<article id="card" class="card">
            <img src='${data.Poster}' id="cover" class="cover">
            <div id="datacard" class="datacard">
            <p id="movietitle">${data.Title}</p>
            <p id="moviegenre">${data.Genre}</p>
            <p id="movieorigin">${data.Country}</p>
            </div>
        </article>`
    })

    fetch(url6)

    .then(res => res.json() ) 
    .then(data => {
        main.innerHTML += 
        `<article id="card" class="card">
            <img src='${data.Poster}' id="cover" class="cover">
            <div id="datacard" class="datacard">
            <p id="movietitle">${data.Title}</p>
            <p id="moviegenre">${data.Genre}</p>
            <p id="movieorigin">${data.Country}</p>
            </div>
        </article>`
    })

*/
// Barra de busqueda
/* PRUEBA DE PLANTILLA
let template = `<article id="card" class="card">
    <img src='${data.Poster}' id="cover" class="cover">
    <div id="datacard" class="datacard">
    <p id="movietitle">${data.Title}</p>
    <p id="moviegenre">${data.Genre}</p>
    <p id="movieorigin">${data.Country}</p>
    </div>
</article>`;

document.getElementById('prueba').innerHTML = template
*/

/*
let TumbaLuci;
fetch(url6).then(
    function(u){ return u.json();}
    ).then(
        function(json){
            TumbaLuci = json;
        }
    );
*/

// Pasos lógicos.
// Conectar con la API desde mi archivo local.
    // Sacar la KEY para poder acceder a los datos.
    // Ver que parámetros se pueden usar o no para conseguir información.
    // De acuerdo a las posibilidades del array que se forme, ver que se puede mostrar en pantalla.


// Pasos lógicos de un buscador 
// Escribir un valor a buscar en la barra asignada
// Tomar el valor y agregarselo a la ur donde van los términos de búsqueda
// 
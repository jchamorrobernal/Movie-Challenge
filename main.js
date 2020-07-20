// Funciones Exportadas

import { getAnswer } from './app.js'

// Manipulación DOM

const genre = document.getElementById('genre');
const origin = document.getElementById('origin');
const order = document.getElementById('order');
const main = document.getElementById('container'); 
const searchbar = document.getElementById('searchbar')
const tituloHome = document.getElementById('title')
const magnifier = document.getElementById('magnifiericon')
// Boton volver a Index

tituloHome.addEventListener('click', function() {
    window.location.replace("./index.html")
    });

// Movies

const arrayUrl = ["http://www.omdbapi.com/?i=tt0851578&apikey=57127a04", "http://www.omdbapi.com/?i=tt4633694&apikey=57127a04",
 "http://www.omdbapi.com/?i=tt1865505&apikey=57127a04", "http://www.omdbapi.com/?i=tt2576852&apikey=57127a04", 
 "http://www.omdbapi.com/?i=tt0070544&apikey=57127a04", "http://www.omdbapi.com/?i=tt0095327&apikey=57127a04"]

// Card template

arrayUrl.forEach(function element(data) 

{
        fetch(data)
        .then(res => res.json() ) 
        .then(data => {
        main.innerHTML += 
        `<article id="card" class="card">
            <div id="linkcard" class="linkcard">
                <a href="https://www.imdb.com/title/${data.imdbID}" target="_blank">  
                <img src='${data.Poster}' id="cover" class="cover">
                </a>
            </div>    
            <div id="datacard" class="datacard">
            <p id="movietitle">${data.Title}</p>
            <p id="moviegenre">${data.Genre}</p>
            <p id="movieorigin">${data.Country}</p>
            </div>
        </article>`
        console.log(data)
    })
    });


// searchbar

searchbar.addEventListener('keyup', function(event) {
    if (event.keyCode == 13 ) {
        const searchValue = searchbar.value
        getAnswer(searchValue)
    }
})

magnifier.addEventListener('click', function(event) {
   const searchValue = searchbar.value;
   getAnswer(searchValue)
    
})

// sort movies

// footer

const aboutUs = document.getElementById('about')

aboutUs.addEventListener('click', function() 
{ location.href = './aboutus.html'}
)


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
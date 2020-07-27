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
console.log(movieSort.value)
movieSort.addEventListener('change', () => {
    const selectorValue = movieSort.value;
    movieSelector(selectorValue);
})

// default load

/*addEventListener('load', () => {
    const selectorValue = movieSort.value;
    movieSelector(selectorValue);
    });
*/
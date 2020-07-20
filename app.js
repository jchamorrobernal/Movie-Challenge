
// funcion buscador

export const getAnswer = (name) => {
    console.log(name)
    const searchUrl = `https://www.omdbapi.com/?t=${name}&apikey=57127a04`
    console.log(searchUrl)
    fetch(searchUrl)
    .then(res => res.json() ) 
    .then(data => {
        console.log(data)
        const valor = Object.values(data);
        console.log(valor)
        if (valor.includes("False")) {
            console.log(typeof(valor))
            main.innerHTML = `<div class="searcherror">
            <p>No movie have been found. Please try a different movie title...</p>
            </div>`           
        }

        else if (valor[5].includes("Animation")) {
            console.log(typeof(valor))
            console.log(data.value)
            main.innerHTML = 
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
        }
        else {
            main.innerHTML = `<div class="searcherror">
            <p>This movie is not animation, please try a different title...</p>
            </div>`     
        }
    })
};
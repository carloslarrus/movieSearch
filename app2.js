let body = document.querySelector('body')
let search = document.querySelector('.search')
let input = document.querySelector('.input')
let button = document.querySelector('.button')
async function getMovie(){
    let movie = input.value
    let res = await fetch(`http://www.omdbapi.com/?i={data from omdb api}&apikey={data from omdb api}=${movie}`)
    let movieArr = await res.json()
    // movieArr.forEach(movie => {

    // })
    console.log(movieArr)
        console.log(movieArr)
        movieArr.Search.forEach(
            movie =>{
                fetch(`http://www.omdbapi.com/?i={data from omdb api}&apikey={data from omdb api}&t=${movie.Title}`)
                .then(movie => {
                    return movie.json()
                })
                .then(movie =>{
                    console.log(movie)
                     // boxMovie
        let boxMovie = document.createElement('div')
        boxMovie.setAttribute('class', 'boxMovie')
        body.appendChild(boxMovie)

        // poster
        let poster = document.createElement('img')
        poster.setAttribute('src',`${movie.Poster}` )
        boxMovie.appendChild(poster)

        // movieInformation
        let information = document.createElement('div')
        information.setAttribute('class', 'information')
        boxMovie.appendChild(information)

        // title
        let title = document.createElement('h2')
        title.setAttribute('class', 'title')
        title.innerText = movie.Title
        information.appendChild(title)

        // date
        let date = document.createElement('div')
        date.setAttribute('class', 'date')
        date.innerText =  'Release date : ' + movie.Released
        information.appendChild(date)

        // rating
        let rating = document.createElement('div')
        rating.setAttribute('class', 'rating')
        information.appendChild(rating)
        rating.innerText =  'Rating : ' + movie.imdbRating

        // plot
        let plot = document.createElement('div')
        let plotWord = document.createElement('div')
        plotWord.setAttribute('class', 'plotWord')
        plotWord.innerText ='Plot :'
        information.appendChild(plotWord)
        plot.setAttribute('class', 'plot')
        information.appendChild(plot)
        plot.innerText =  movie.Plot

        // genre
        let genre = document.createElement('div')
        
        genre.setAttribute('class', 'genre')
        information.appendChild(genre)
         let genre1 = movie.Genre.split(',')
         console.log(genre1)
        genre1.forEach(item => {
            let genreItem = document.createElement('div')
            genreItem.setAttribute('class','genreItem')
            genreItem.innerText = item
            genre.appendChild(genreItem)
            // console.log(item)
            
        })

                })
               // boxMovie
        
            }
        )
    
    
}

button.addEventListener('click', getMovie)

let arr = []
console.log(arr)
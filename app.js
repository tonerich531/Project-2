// console.log(fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fe9afa06&s=gangster"))
const songYear = document.querySelector(".year");
const movieWrapper = document.querySelector(".movies");
const movieInfo = [] 

 movieWrapper.innerHTML = 
                `<div class="movie">
                        <figure>
                            <img class="movie__poster--img" src="${movieInfo.Search['1'].Poster}" alt="">
                        </figure>
                        <div class="movie__title">
                            <span class="text__purple">"${movieInfo.Search[1].Title}"</span>
                        </div>
                        <div class="show__type">${movieInfo.Search[1].Type}</div>
                        <div class="show__year">${movieInfo.Search[1].Year}</div>
                        <div class="imdb__id">${movieInfo.Search[1].imdbid}</div>                        
                    </div>                                                        
                </div>`;

// 1. Then

// fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fe9afa06&s=gangster").then((respnse) => {
    // return respnse.json()        
    // }).then(data => {
        // console.log(data);
        
    // })

    // 2. Async/Await
    async function main() {
       const response =  await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=fe9afa06&s=gangster")
       const data = await response.json();      
       songYear.innerHTML = data.Search[0].Year;
        const getMovies = data;
        movieInfo.push(getMovies);
        console.log(getMovies);       
               
    }

    main()

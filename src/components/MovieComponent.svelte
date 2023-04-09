<script>
    export let media;
    const apiKey = 'c5991897d88bb42408fd5d87948090aa';
    export let mediaType ;
    let mediaId = media.id;
    let imageUrl =`https://image.tmdb.org/t/p/w500${media.poster_path}`
    let title;
    let overview = media.overview;
    let ratings = media.vote_average + '0';
    let watchTime = 'na';
    let releaseDate; 
    let genreArray = [
        {
            "id": 28,
            "name": "Action"
        },
        {
            "id": 53,
            "name": "Thriller"
        },
        {
            "id": 80,
            "name": "Crime"
        }
    ];
   
    let originCountry;

const url = `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${apiKey}&language=en-US`;

if(mediaType === "movie"){
    title = media.title;
    fetch(url)
  .then((response) => response.json())
  .then((data) => {
watchTime = data.runtime;
releaseDate = media.release_date.split('-')[0];
genreArray = data.genres;
if(genreArray.length >= 3)
{    let tempGenres ;
     tempGenres = genreArray.slice(0, 3);
     genreArray = tempGenres;
    }

    if(data.production_countries)
originCountry = data.production_countries[0].name;
 
})
  .catch((error) => {

    
    // console.error("Error fetching movie details: ", error);
  });
 
}
else{
    fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if(data.production_countries)
    originCountry = data.production_countries[0].name;
genreArray = data.genres;
if(genreArray.length >= 3)
{    let tempGenres ;
     tempGenres = genreArray.slice(0, 3);
     genreArray = tempGenres;

    }



 
})
  .catch((error) => {

    
    console.error("Error fetching movie details: ", error);
  });
    releaseDate = media.first_air_date.split('-')[0];
    title = media.name;
    
}



   
</script>

<article class="movie-container">
    <div class="movie-poster-container">
    <div class="movie-poster" style="background-image: url({imageUrl})">
        <i class="fa-solid fa-circle-play"></i>
    </div>
</div>
 <aside class="movie-hover-details-container">
    <h3 class="poster-title">
        {title}
    </h3>
    <div class="movie-features-container">
        <p class="movie-features-ratings">
            <i class="fa-solid fa-star"></i>
            <span>{ratings}</span>
        </p>

        <p class="movie-features-date">
            {releaseDate}
        </p>

        <p class="movie-features-watchtime">
           {`${watchTime} min`}
        </p>

        <button class="movie-quality">
            HD
        </button>
      
     

    </div>

    <p class="movie-info">
      {overview}
    </p>
<div class="country-genre-container">
    <aside>
    <p>Country: </p> <span>{originCountry}</span>
</aside>

<aside>
    <p>Genre: </p> <p>
<span>{genreArray.map(item=>item.name).join(",")}</span>
    </p>
</aside>
    
</div>
   
<div class="movie-bottom-container">
    <button class="watch-now">
        <i class="fa-solid fa-play"></i>
<p>Watch Now</p>
    </button>

    <button class="like">
        <i class="fa-regular fa-heart"></i>
    </button>
</div>
 </aside>
   
    <button class="movie-poster-quality">HD</button>
    <h3 class="poster-title">{title}</h3>
    <aside class="poster-bottom-container">
     <p class="poster-release-date">
     {releaseDate}
     </p>
     <p class="poster-watch-time">
        {`${watchTime} min`}
     </p>

     <p class="poster-type">
        {mediaType}
     </p>
    </aside>
</article>

<style>

.movie-hover-details-container{
    display: none;
}


  .movie-container:hover  .movie-hover-details-container{
        display: block;
        position: absolute;
        min-width: 16rem;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        background: rgba(33,37,41,255);
        z-index: 11;
        transform: translateX(2.5%);
        bottom: 0%;
  left: auto;
  left: 100%;
    }

    

.movie-features-container{
    display: flex;
    align-items: center;
    color: #bbb;
    justify-content: space-between;
    padding-top: 4px; 
 }

.movie-features-ratings{
display: flex;
align-items: center;
gap: 3px;
font-size: 12px;
font-weight: 600;
}

.movie-features-ratings span{
   opacity: 0.75; 
}

.movie-features-ratings i{
    font-size: 10px;
    color: #00acc1;

} 

.movie-features-date{
    font-size: 12px;
    opacity: 0.75; 
}

.movie-features-watchtime{
    font-size: 12px;
    opacity: 0.75; 
}

.movie-quality{
font-size: 11px;
font-weight: 600;
padding: 1px 4px;
outline: none;
border: none;
border-radius: 3px;
background: #00acc1; 

}

.movie-info{
        color: #bbb;
        font-size: 11.75px;
        font-weight: 400;
      padding: 14px 0;
      opacity: 0.75; 
      -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
    }

.country-genre-container{
font-size: 10px;
color: #bbb;
font-weight: 600;
margin-bottom: 14px;
}

.country-genre-container aside {
    margin-bottom: 6px;
    display: flex;
    gap: 2px;

}

.country-genre-container aside p{
    opacity: 0.75;
}

.country-genre-container p span{
    opacity: 1;
}


.movie-bottom-container{
    display: flex;
    gap: 0.5rem;
    padding: 0.25rem 0;

    
    
}

.watch-now{
    color: #eee;
    border: none;
    outline: none;
    background: rgba(51,57,64,255);
    display: flex;
    align-items: center;
    gap: 6px;
justify-content: center;
    flex-grow: 1;
    border-radius: 3px;
}

.watch-now p{
    font-weight: 500;
    font-size: 14px;
     opacity: 0.85;
}
.watch-now i{

    color: #00acc1;
}

.watch-now:hover{
    opacity: 0.85;
    cursor: pointer;
}

.like:hover{
    opacity: 0.85;
    cursor: pointer;
}

.like{
    color: white;
    background: #d63558;
    border: none;
    padding: 7px 12px;
    font-size: 15px;
    border-radius: 4px;
   
}
    .movie-container{
      display: flex;
      flex-direction: column;
      position: relative;
      cursor: pointer;
      /* max-width: 10.25rem; */

    }

  

    .movie-poster{
       position: relative;
        width: 10.75rem;
        height: 15.75rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 4px;

    }
  .fa-circle-play{
    display: none;}

    .movie-container:hover .fa-circle-play{
    position: absolute;
    display: inline-block;
    font-size: 3.25rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #00acc1;
    background: white;
    border-radius: 50%;
    opacity: 1;
    z-index: 10;
    }


    .movie-container:hover .movie-poster::after{
    position: absolute;
    content: '';
    width: 100%;
    height:100%;
    background: #111;
    opacity: 0.325;
    z-index: 5;

        
}

    .movie-poster-quality{
     position: absolute;
     top: 2.5%;
     right: 5%;
     padding: 1px 5px;
     outline: none;
     border: none;
     border-radius: 3px;
     font-size: 13px;
     font-weight: 600;
     pointer-events: none;
     z-index: 3;

    }

  
    .poster-title{
        color: white;
        font-size: 15px;
        font-weight: 400;
        margin: 8px 0;
    }

    .poster-bottom-container{
        color: #bbb;
        display: flex;
        font-size: 13.5px;
        font-weight: 500;
        justify-content: space-between;
    }
    
    .poster-type{
        border: 1px solid #bbb;
        padding: 1px 3px;
        font-size: 10px;
        border-radius: 3px;
        text-transform: capitalize;
    }

    @media only screen and (max-width: 1520px ){
.movie-poster{
    height: 15rem;
   width: 10rem;
}
    }

    @media only screen and (max-width: 1450px ){
    .movie-poster{
        height: 18.5rem;
   width: 13rem;
}
    }
    @media only screen and (max-width: 1325px ){
    .movie-poster{
        height: 18rem;
   width: 11.75rem;
}
    }

    @media only screen and (max-width: 1275px ){
    .movie-poster{
        height: 18rem;
   width: 11.75rem;
}}

@media only screen and (max-width: 1050px ){
    .movie-poster{
       min-height: 28vw;
   min-width: 4vw;
   width: auto;
   height: auto;

}
    }

    @media only screen and (max-width: 768px ){
    .movie-poster{
       min-height: 35vw;
   min-width: 4vw;

}
    }

    @media only screen and (max-width: 575px ){
    .movie-poster{
       min-height: 40vw;
   min-width: 3.75vw;

}
    }

    @media only screen and (max-width: 450px ){
    .movie-poster{
       min-height: 55vw;
   min-width: 3.25vw;

}
    }


</style>
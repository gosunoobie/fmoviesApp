<script>
    export let poster;
</script>

<article class="movie-container">
    <div class="movie-poster" style="background-image: url({poster})">

    </div>
    <button class="movie-poster-quality">HD</button>
    <h3 class="poster-title">The Whale</h3>
    <aside class="poster-bottom-container">
     <p class="poster-release-date">
     2022
     </p>
     <p class="poster-watch-time">
        117 min
     </p>

     <p class="poster-type">
        Movie
     </p>
    </aside>
</article>

<style>
    .movie-container{
      display: flex;
      flex-direction: column;
      position: relative;
      /* max-width: 10.25rem; */

    }
    .movie-poster{
       
        width: 10.75rem;
        height: 15.75rem;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 4px;

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
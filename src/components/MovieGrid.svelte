<script>
  import { apiKey, fetchAllItems } from "../store/stores";

  export let currentUrl;
  const pages = 2;
  export let mediaType;
  import MovieComponent from "./MovieComponent.svelte";

$: promise = fetchAllItems(apiKey,currentUrl,2);


</script>
{#await promise}
<p>...loading</p>

{:then items}
<section class="movie-grid-container">

    {#each items as item}
    <MovieComponent media= {item} mediaType={mediaType}/>
    {/each}
</section>

{:catch error}
<p>error</p>
{/await}
<style>

    
    .movie-grid-container{
        display: grid;
        /* padding: 0 2.25vw; */
        background: #111;
        grid-template-columns: repeat(8,1fr);
       column-gap: 0.75rem;
       row-gap: 2rem;
       width: 1450px;
       margin: 0 auto;
    }



    @media only screen and (max-width: 1520px ){
    .movie-grid-container{
        /* padding: 0 4.25vw; */
        padding: 0;
        column-gap: 0.5rem;
        width: 1375px;
        margin: 0 auto;
}}

@media only screen and (max-width: 1450px ){
    .movie-grid-container{
       
  
        grid-template-columns: repeat(6,1fr);
        width: 1300px;
        margin: 0 auto;

}
    }

    @media only screen and (max-width: 1325px ){
    .movie-grid-container{
        width: 1160px;
  

}
    }

    @media only screen and (max-width: 1275px ){
    .movie-grid-container{
        grid-template-columns: repeat(5,1fr);
        width: 950px;
        margin: 0 auto;
        column-gap: 0.625rem;

}
    }

    @media only screen and (max-width: 1050px ){
    .movie-grid-container{
        grid-template-columns: repeat(5,1fr);
        width: 95%;
        margin: 0 auto;
        column-gap: 0.625rem;
        grid-auto-rows: minmax(min-content, max-content);
  grid-auto-columns: minmax(2.5rem, 7.5rem);

}
    }

    @media only screen and (max-width: 768px ){
    .movie-grid-container{
        grid-template-columns: repeat(4,1fr);
        width: 95%;
        margin: 0 auto;


}
    }

    @media only screen and (max-width: 575px ){
    .movie-grid-container{
        grid-template-columns: repeat(3,1fr);
        width: 95%;
        margin: 0 auto;


}
    }
    

    @media only screen and (max-width: 450px ){
    .movie-grid-container{
        grid-template-columns: repeat(2,1fr);
        width: 90%;
        margin: 0 auto;


}
    }
</style>
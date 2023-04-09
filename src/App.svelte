 <script>
  import { onMount } from 'svelte';
  import NavBar from './components/NavBar.svelte';
  import { screenSize, topArray,SetFetchArray,fetchArray,discoverArray,SetTopArray, SetDiscoverArray, SetRandomArray, randomArray, trendingMovieUrl,popularUrl,trendingTvShowsUrl,batmanUrl,apiKey,fetchAllItems} from './store/stores';
  import Carousel from './components/Carousel.svelte'
  import Recommendations from './components/Recommendations.svelte';
  import MovieGrid from './components/MovieGrid.svelte';
 // change this fetch to axios

 // make routing available

 // use {#await promise} 

 //use debounce 



// Call the function inside an async function
(async function () {
  const trendingShows = await fetchAllItems(apiKey,trendingTvShowsUrl,2); // Fetch 24 items from first two pages
  SetTopArray(trendingShows);
  const popularMovies = await fetchAllItems(apiKey,popularUrl,2); 
  SetFetchArray(popularMovies);
  const trendingMovies = await fetchAllItems(apiKey,trendingMovieUrl,2); 
  SetDiscoverArray(trendingMovies);
})();



// (async function () {
//   const items = await fetchItemById(batmanUrl); 
//   SetRandomArray(items);
// })();


  function handleResize() {
    screenSize.set(window.innerWidth);
  }

  onMount(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });


</script>

<NavBar/>
<!-- {#if $randomArray.length > 0}
  <Carousel/>
{:else}

  <p>Loading...</p>
{/if} -->
<Carousel array={$randomArray}/>

<Recommendations type={'Recommended'}/>
<MovieGrid array={$fetchArray}/>
<Recommendations type={'Highly Rated'}/>
<MovieGrid array={$topArray}/> 
<Recommendations type={'Discover'}/>
<MovieGrid array={$discoverArray}/>




<!-- <script>
  const apiKey = 'c5991897d88bb42408fd5d87948090aa';
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data.results); // array of movie objects
  })
  .catch(error => {
    console.error(error);
  });
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'svelte-apollo'
import {gql} from 'apollo-boost'

const getMoviesQuery = gql`
{
  titleoverview,
popularity,
​poster_path,
​​release_date,
​​title,
​​video,
vote_average
}

`

const client = new ApolloClient({
  uri: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
})


</script>


<ApolloProvider client={client}>

</ApolloProvider> -->






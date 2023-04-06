 <script>
  import { onMount } from 'svelte';
  import NavBar from './components/NavBar.svelte';
  import { screenSize, topArray,SetFetchArray,fetchArray,discoverArray,SetTopArray, SetDiscoverArray, SetRandomArray, randomArray,} from './store/stores';
  import Carousel from './components/Carousel.svelte'
  import Recommendations from './components/Recommendations.svelte';
  import MovieGrid from './components/MovieGrid.svelte';
  const apiKey = 'c5991897d88bb42408fd5d87948090aa';
 
  const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const discoverUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
 const popularTvShowsUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
  const batmanUrl =`https://api.themoviedb.org/3/movie/414906?api_key=${apiKey}&language=en-US`
async function fetchAllItems(apiKey,currentUrl,pageCount) {
  const totalPages = pageCount || 1;
  const responses = [];
  
  

  // Make a request for each page of items
  for (let i = 1; i <= totalPages; i++) {
    currentUrl += `&page=${i}&language=en-US`;
     const response = await fetch(currentUrl);
    const data = await response.json();
    responses.push(data.results);
    
  }

  // Combine the results from all pages into a single array
  let items = responses.flat();
  items = items.slice(0, 24);
  return items;
}


async function fetchItemById(currentUrl){
  const response = await fetch(currentUrl);
  const data = await response.json();
  console.log(data)
  return data;
}
// Call the function inside an async function
(async function () {
  const items = await fetchAllItems(apiKey,topRatedUrl,2); // Fetch 24 items from first two pages
  SetTopArray(items);

})();

(async function () {
  const items = await fetchAllItems(apiKey,popularUrl,2); 
  SetFetchArray(items);
})();


(async function () {
  const items = await fetchAllItems(apiKey,trendingMovieUrl,2); 
  SetDiscoverArray(items);
})();


(async function () {
  const items = await fetchItemById(batmanUrl); 
  SetRandomArray(items);
})();


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






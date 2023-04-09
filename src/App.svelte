 <script>
  import { onMount } from 'svelte';
  import NavBar from './components/NavBar.svelte';
  import { screenSize,trendingMovieUrl,popularUrl,topRatedTvShowsUrl,topRatedUrl,displayUrl,wirtableMediaType} from './store/stores';
  import Carousel from './components/Carousel.svelte'
  import Recommendations from './components/Recommendations.svelte';
  import MovieGrid from './components/MovieGrid.svelte';
 // change this fetch to axios

 // make routing available

 // use {#await promise} 

 //use debounce 



// Call the function inside an async function




// (async function () {
//   const items = await fetchItemById(batmanUrl); 
//   SetRandomArray(items);
// })();

$: changeUrl = $displayUrl; 

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
<Carousel/>
<Recommendations type={'Recommended'} />
<MovieGrid  currentUrl={$displayUrl} mediaType ={$wirtableMediaType} />
<Recommendations type={'Highly Rated'}  />
<MovieGrid  currentUrl={topRatedUrl} mediaType ={"movie"}/> 
<Recommendations type={'Discover'}/>
<MovieGrid  currentUrl={topRatedTvShowsUrl} mediaType ={"tv"}/>


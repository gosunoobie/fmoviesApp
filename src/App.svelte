 <script>
  import { onMount } from 'svelte';
  import NavBar from './components/NavBar.svelte';
  import { screenSize,trendingMovieUrl,popularUrl,trendingTvShowsUrl,topRatedUrl} from './store/stores';
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
<Carousel/>

<Recommendations type={'Recommended'}/>
<MovieGrid  currentUrl={popularUrl}/>
<Recommendations type={'Highly Rated'} />
<MovieGrid  currentUrl={topRatedUrl}/> 
<Recommendations type={'Discover'}/>
<MovieGrid  currentUrl={popularUrl}/>


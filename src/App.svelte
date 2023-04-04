<script>
  import { onMount } from 'svelte';
  import NavBar from './components/NavBar.svelte';
  import { screenSize } from './store/stores';
  import Carousel from './components/Carousel.svelte'
  import Recommendations from './components/Recommendations.svelte';
  import MovieGrid from './components/MovieGrid.svelte';
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
<Recommendations type={'Recommended'}/>
<MovieGrid/>
<Recommendations type={'Latest Movies'}/>
<MovieGrid/>
<Recommendations type={'Highly Rated'}/>
<MovieGrid/>
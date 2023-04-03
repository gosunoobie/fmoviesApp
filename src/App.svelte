<script>
  import { onMount } from 'svelte';
  import NavBar from './components/NavBar.svelte';
  import { screenSize } from './store/stores';
  import Carousel from './components/Carousel.svelte'
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

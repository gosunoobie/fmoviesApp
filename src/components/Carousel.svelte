<script>
    import { onMount } from 'svelte';
    import Glide from '@glidejs/glide';
  import CarouselSlide from './CarouselSlide.svelte';
  import { slides } from '../store/stores';
  
    let glide;
  


  
    onMount(() => {


        glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        autoplay: 5000,
        hoverpause: true,
        animationDuration: 2000,
        animationTimingFunc: 'ease',
        gap: 0, // set gap to 0 to remove the gaps
        breakpoints: {
          1200: {
            perView: 1
          }
        }
      });

      glide.mount();
    });
  </script>
  
  <section class="hero-carousel">

  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        {#each slides as slide}
      <CarouselSlide slideImg={slide}/>
        {/each}
      </ul>
    </div>
  
    <div class="glide__bullets" data-glide-el="controls[nav]">
      {#each slides as slide, i}
        <button class="glide__bullet" data-glide-dir={`=${i}`}></button>
      {/each}
    </div>
  </div>
</section>

<style>




    .glide__bullet {
      margin: 0 5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #bbb;
      cursor: pointer;
      transition: all .3s ease-in-out;
    }
  
    .glide__bullet--active {
      background-color: #333;
    }


  </style>
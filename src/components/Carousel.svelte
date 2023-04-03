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
        animationDuration: 1000,
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
        <button class="glide__bullet glide__bullet--active" data-glide-dir={`=${i}`}></button>
      {/each}
    </div>
  </div>
</section>

<style>

/* :host .glide__bullet--active {
    background-color: #00acc1;
  } */

.hero-carousel{
  position: relative;
}

   .glide__bullets{
    position: absolute;
    bottom: 0%;
   left: 50%; 
   transform: translate(-50%,-50%);
  }

    .glide__bullet {
      margin: 0 6.25px;
      width: 9.5px;
      height: 9.5px;
      border-radius: 50%;
      cursor: pointer;
      transition: all .3s ease-in-out;
      background: #bbb;
      outline:none;
      border: none;
      opacity: 0.6;

    }
  
    .glide__bullet--active {
      background-color: #00acc1;
      opacity: 1;
     
    }
    
    

    .glide__bullet:hover{
      opacity: 1;
    }

    @media only screen and (max-width:650px){
      .glide__bullet{
        width: 8px;
      height: 8px;
      margin: 0 5px;
      }
    }
  </style>
<script>
    export let type; 
    function changeBtn(event){
    const btnArray = event.target.parentElement.querySelectorAll(".recommendations-btn");
    btnArray.forEach(element => {
        
        if(element.classList.contains("btn-active"))
        element.classList.remove("btn-active");
    });
    event.target.classList.add("btn-active");
    }
</script>


<section class="recommendations-container">
    <h2 class="recommendations-title">
        {type}
    </h2>
{#if type ==='Recommended'}
    <div class="recommendations-btn-container">
        <button class="recommendations-btn btn-active"
        on:click={changeBtn}>
            <i class="fa-sharp fa-solid fa-circle-play"></i>    Movies
        </button>
     <button class="recommendations-btn"  on:click={changeBtn}>
        <i class="fa-solid fa-list-ul"></i>
        TV Shows
     </button>
  <button class="recommendations-btn"  on:click={changeBtn}>
    <i class="fa-solid fa-arrow-trend-up"></i>
    Trending
  </button>
    </div>
    {/if}
</section>


<style>
    .recommendations-container{
    display: flex;
    gap: 2rem;
    background: #111;
    padding: 1.75rem 4.25vw;
    
    }

    .recommendations-title{
       position: relative;
        color: #e9ecef;
        opacity: 0.85;
        font-weight: 400;
        font-size: 1.55rem;
        
    }
    .recommendations-title::after{
        content: '';
        position: absolute;
        width: 42.5%;
        height: 1.225px;
        background: #bbb;
        opacity: 0.85;
        left: 0;
        bottom: -4px;

    }

.recommendations-btn-container{
    display: flex;
    gap: 8px;
    align-items: center;
}
    .recommendations-btn{
        display: flex;
        gap: 4px;
        padding:6px 10px;
        align-items: center;
        color: #bbb;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 3px;
        background: #343a40;
        
    }

    .recommendations-btn:hover{
      color: #e9ecef;
    }

    .btn-active{
        background: #00acc1;
      color: white; 
    }

    .btn-active:hover{
        color: white;

    }

    @media only screen and (max-width:768px){
.recommendations-container{
    flex-direction: column;
    gap: 18px;
}
.recommendations-title{
    font-size: 1.5rem;
}
.recommendations-title::after{
    width: 4.25rem;
    height: 1px;
}

.recommendations-btn{
    font-size: 12px;
    font-weight: 600;
}
}
</style>
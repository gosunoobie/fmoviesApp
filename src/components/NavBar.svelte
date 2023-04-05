<script>
  import { screenSize,breakPoints,genreArray,countryArray } from "../store/stores";
  import MenuItems from "./MenuItems.svelte";

  let isShowSideMenu = false;
  let isShowGenreMenu = false;
  let isShowCountryMenu = false;
  let isHoverEnabled;

  $: isHoverEnabled = isShowGenreMenu || isShowCountryMenu;

  function showSideMenu(){
    isShowSideMenu = !isShowSideMenu;
    console.log('isShowSideMenu',isShowSideMenu)
  }

  function showGenreMenu(){
    isShowGenreMenu = !isShowGenreMenu;
    isShowCountryMenu = false;
  }

  function showCountryMenu(){
    isShowCountryMenu = !isShowCountryMenu;
    isShowGenreMenu = false;
  }
   
  function handleKeyDown(){

  }

  </script>


<nav class="nav-container"> 
    <aside class="nav-left-side">

        {#if $screenSize < breakPoints.Xl}
        <ul class="hamburger-logo" on:click={showSideMenu} on:keydown={handleKeyDown}>
            <li class="hamburger-logo-items"></li>
            <li class="hamburger-logo-items"></li>
            <li class="hamburger-logo-items"></li>
        </ul>
            {/if}
        <img src="https://s1.bunnycdn.ru/assets/sites/fmovies/logo2.png" alt="" class="app-logo">

       {#if $screenSize > breakPoints.Xl}
        <ul class="menu-section">
            <li class="menu-section-item"><a href="/">Home</a></li>
            <li class="menu-section-item genre-link {isHoverEnabled ? 'hoverDisabled' : ''}" ><a href="/" >Genre</a>
              
                <ul class="menu-items-container genre-menu-container " style="display: {isShowGenreMenu ? 'grid' : 'none'}"  >

                    {#each genreArray as genre}
                    <MenuItems item={genre}/>
                    {/each}
         
    
            </ul>
            </li>
            <li class="menu-section-item country-link {isHoverEnabled ? 'hoverDisabled' : ''}" ><a href="/" >Country</a>
                
                <ul class="menu-items-container country-menu-container " style="display: {isShowCountryMenu ? 'grid' : 'none'}">
                {#each countryArray as country}
                <MenuItems item={country}/>
                {/each}
     

        </ul>
            
         
            </li>
            <li class="menu-section-item"><a href="/">Movies</a> </li>
            <li class="menu-section-item"><a href="/">TV-Series</a></li>
            <li class="menu-section-item"><a href="/">Top IMDb</a></li>
          </ul>
          {/if}
          {#if $screenSize > breakPoints.Md}
      <div class="search-box-container">
        <i class="fa fa-search search-box-icon">

        </i>
        <input type="text" class="search-box" placeholder="Enter your keywords">
      </div>    
     {/if}
    </aside>

  {#if ($screenSize < breakPoints.Xl) && isShowSideMenu}
 <ul class="side-menu-container">
    <li class="side-menu-section-item"><a href="/">Home</a></li>
    <li class="side-menu-section-item " on:click={showGenreMenu} on:keydown={handleKeyDown}>
            <div class="side-menu-link ">
        <a href="/" >Genre</a>
        {#if isShowGenreMenu}
        <i class="fa fa-minus">
        
        </i>
     
        {:else}
        <i class="fa fa-plus">

        </i>
        {/if}
</div>
{#if isShowGenreMenu}       
<ul class="side-menu-items-container genre-side-menu-container"  >
          
            {#each genreArray as genre}
            <li class="expanded-items">
           <a href="/{genre}">{genre}</a>

            </li>
            {/each}
 

    </ul>
{/if}

  
</li>


    <li class="side-menu-section-item " on:click={showCountryMenu} on:keydown={handleKeyDown}>
        <div class="side-menu-link ">
    <a href="/" >Country</a>
    {#if isShowCountryMenu}
    <i class="fa fa-minus">
    
    </i>
 
    {:else}
    <i class="fa fa-plus">

    </i>
    {/if}
</div>
{#if isShowCountryMenu}
    <ul class="side-menu-items-container country-side-menu-container"  >
      
        {#each countryArray as country}
        <li class="expanded-items">
       <a href="/{country}">{country}</a>

        </li>
        {/each}


</ul>

{/if}

</li>


    
    <li class="side-menu-section-item"><a href="/">Movies</a> </li>
    <li class="side-menu-section-item"><a href="/">TV-Series</a></li>
    <li class="side-menu-section-item"><a href="/">Top IMDb</a></li>
 </ul>

{/if}
    <aside class="nav-right-side">
        {#if $screenSize < breakPoints.Md}
        <i class="fa fa-search search-icon">

        </i>
        {/if}
       <div class="profile-container">
        <i class="fa fa-user-circle">
 
   </i>
   {#if $screenSize > breakPoints.Md}
   <p class="sign-in-required">
    Login/Register
   </p>
{/if}
</div>
    </aside>
</nav>


<style>

    .nav-container{
        /* position: fixed; */
        position: absolute;
        background: #090909;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
       /* padding: 0 1.75rem;    */
         padding: 0 2rem;
         background: none;
         width: 100vw;
         z-index: 10;
          }

       .nav-left-side{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

       }
   .app-logo{
    width: 140px;
   }

   .hamburger-logo{
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    list-style: none;
    opacity: 0.865;
    transition: all 0.2s ease-in;
        
   }
.hamburger-logo:hover{
    cursor: pointer;
    opacity: 1;
}

   .hamburger-logo-items{
    position: relative;
    width: 20px;
    height: 3.25px;
    background: #e9ecef;
    border-radius: 1px;

   }
   .hamburger-logo-items::after{
    content: '';
    position: absolute;
    height: 5.4px;
    width: 5.4px;
    background: #e9ecef;
    border-radius: 50%;
    /* left: -10px; */
    /* bottom: 0.1px; */
   left: 50%;
   right: 50%;
   transform: translate(-340%,-20.5%);
   
}


.menu-section{
    position: relative;
    list-style: none;
    display: flex;
    gap: 2rem;
    padding-left: 1rem;
  
    
}
.menu-section-item{
    position: relative;
    padding: 6px 0;
}

.menu-section-item a{
    text-decoration: none;
    color: #e9ecef;
    opacity: 0.85;

}

.menu-section-item a:hover{
    opacity: 1;
    color: #00acc1;
}

.menu-items-container{
    display: none;
    width: 450px;
    grid-template-columns: repeat(3,1fr);
    background: #212529;
    position: absolute;
    top: 2rem;
    left: -1rem;
    padding: 1rem;
    gap: 0.25rem 1rem;
    border-radius: 0.5rem;
    

}



.country-link:hover .country-menu-container{
    display: grid !important;
}

.genre-link:hover .genre-menu-container{
    display: grid !important;
}

 .nav-right-side{
    display: flex;
    gap: 1.25rem;
    align-items: center;

 }

    i{
        color: #e9ecef;
        font-size: 1.725rem;
        opacity: 0.85;

    }

.search-box-container{
    background: rgba(255,255,255,.2);
    display: flex;
    gap: 1rem;
    width: 340px;
    height: 42.5px;
    border-radius: 1.25rem;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
   
    transition: all 0.2s ease-in;
}

.search-box-container:hover{
    background: rgba(222,226,230,.9);
 
    box-shadow: 0 0 11px #111;
    
}
.search-box-container:hover .search-box{
    color: #343a40;
}

.search-box-container:hover .search-box-icon{
color: #343a40;
} 

.search-box{
    outline: none;
    border: none;
    font-size: 15px;
    font-weight: 400 ;
   color: #e9ecef;
   background: none;
   height: 42.5px;
   width: 90%;

  }
.search-box-icon{
    font-size: 18px;
    font-weight: 600;
}
    i:hover{
        cursor: pointer;
        opacity: 1;
    }
.search-icon{
    font-size: 24px;
    transition: all 0.2s ease-in;
}
    .profile-container{
        opacity: 0.85;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.2s ease-in;
    }
    .profile-container:hover{
        opacity: 1;
       cursor: pointer;
    }

    .sign-in-required{
        color: #e9ecef;
    }

    .side-menu-container{
        display: flex;
        flex-direction: column;
        background: #212529;
        position: absolute;
        top: 60px;
        padding: 10px;
        width: 360px;
        border-radius: 4px;
        box-shadow: 0 0 11px #111;
        left: 1rem;
        z-index: 14;
        
    }

    .side-menu-section-item{
  list-style: none;
  width: 100%;
  padding: 10px 0;
  cursor: pointer;
  position: relative;

    }
.side-menu-section-item:not(:last-child){
    box-shadow: 0px 1px rgba(17, 17, 17,0.675);
}

.side-menu-section-item:hover a{
    color: #00acc1;
    

}
    .side-menu-section-item a{
        text-decoration: none;
        color: #bbb;
      
       font-size: 14px;

 }

 .side-menu-link{
    display: flex;
    align-items: center;
    justify-content: space-between;
 }

 i.fa-plus{
    position: relative;
    font-size: 12px;
    font-weight: 900;
    z-index: 15;
    color: #090909;
    margin-right: 8px;
    
 }

 i.fa-plus::after{
    position: absolute;
    content: '';
    width: 14px;
    height: 14px;
    background: #e9ecef;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    border-radius: 2px;
    
 }

 i.fa-minus{
    position: relative;
    font-size: 12px;
    font-weight: 900;
    z-index: 5;
    color: #090909;
    margin-right: 8px;
    
 }

 i.fa-minus::after{
    position: absolute;
    content: '';
    width: 14px;
    height: 14px;
    background: #e9ecef;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: -1;
    border-radius: 2px;
    
 }

 /* side-menu-items-container country-side-menu-container */
 .side-menu-items-container{
    display: grid;
    grid-template-columns: repeat(3,1fr);
  padding: 1rem;
  gap: 0.5rem ;
  background: #111;
  border-radius: 8px;
  margin-top: 0.625rem;
  position: relative;
  z-index: 14;
}

 .expanded-items{
list-style: none;
 }

 .expanded-items a{
color: #e9ecef !important;
font-size: 13px;
 }

 .expanded-items:hover a{
color: #00acc1 !important;
 }

 .country-side-menu-container{
    grid-template-columns: repeat(2,1fr);
 }

 .hoverDisabled{
    pointer-events: none;
 }
</style>


<script>
    export let slideImg;
</script>

<li class="glide__slide" style="background-image: radial-gradient(ellipse at center, rgba(17,17,17,0.125) 0%, rgba(17,17,17,0.75) 100%), linear-gradient(180deg, rgba(17,17,17,0.5) 0%, rgba(17,17,17,0) 50%, rgba(17,17,17,0.95) 100%), url({slideImg})">
        
    <aside class="glide-info-container">
        <h2 class="glide-title">The Batman</h2>
        <div class="glide-details">
            <button class="glide-movie-quality">hd</button>
            <div class="glide-ratings">
                <i class="fa-solid fa-star fa-movie-ratings"></i>
                7.80</div>
            <div class="glide-watchtime">192 min</div>
            <div class="glide-tags-container">
                <div class="glide-tags">
                    Adventure
                </div>
                <div class="glide-tags">
                    Action
                </div>
           <div class="glide-tags">
            Fantasy
           </div>
            </div>
        </div>

        <p class="glide-info">
            Jake sully lives with his newfound family formed on the extrasolar moon Pandara.     Jake sully lives with his newfound family formed on the extrasolar moon Pandara.     Jake sully lives with his newfound family formed on the extrasolar moon Pandara.
        </p>

        <div class="glide-options">
            <button class="glide-watch">
                <i class="fa-solid fa-play glide-btns-icon"></i>
                Watch now
            </button>
            <button class="glide-add">
                <i class="fa-regular fa-heart glide-btns-icon"></i>
                Add to list
            </button>
        </div>
    </aside>
    
    </li>

    <style>
        .glide__slide{
    min-width: 100vw;
    background-size: cover;
    height: 37rem;
    background-repeat: no-repeat;
    background-position: top center;
    width: 100vw !important;
        margin: 0 !important;
        display: flex;
        align-items: end;
}

.glide-info-container{
    margin: 0 4.5vw;
    display: flex;
    flex-direction: column;
    width: 625px;
    
    
}

.glide-title{
    font-size: 2.25rem;
    color: white;
    font-weight: 600;
}

.glide-details{
    display: flex;
    align-items: center;
    justify-content :flex-start;
    gap: 1.25rem;
    margin: 6px 0;
}

.glide-movie-quality{
text-transform: uppercase;
font-weight: 700;
font-size: 11px;
padding: 4.5px 8px;
background: #00acc1;
border: none;
border-radius: 3px;
}


.glide-info{
    color: #e9ecef;
    opacity: 0.725;
    margin: 1rem 0 2rem 0;

}
.glide-ratings{
    color: white;
    font-size:14px;
    font-weight: 600;
}

.glide-watchtime{
    color: #e9ecef;
    font-size: 14px;
  
}

.glide-tags-container{
display: flex;
gap: 0.75rem;
color: white;

}

.glide-tags{
    font-size: 14px;
}

.glide-options{
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    gap: 1.25rem;
}

.glide-watch{
padding: 8px 24px;
border-radius: 1rem;
border: 1px solid #00acc1;
background: none;
color: #00acc1;
cursor: pointer;
transition: all 0.25s ease-in;
}

.glide-watch:hover{
background: #00acc1;
color: #111;
}

.glide-add{
    padding: 8px 24px;
border-radius: 1rem;
border: 1px solid #bbb;
background: none;
color:  #bbb;
cursor: pointer;
transition: all 0.25s ease-in;
}
.glide-add:hover{
    color: #111;
    background: #bbb;
}
.glide-btns-icon{
margin-right: 2px;
}

.fa-movie-ratings{
    font-size: 11.75px;
}


@media only screen and (max-width: 1280px) {
  .glide__slide{
    height: 34.5rem;
  }

  .glide-movie-quality{
    font-size: 10px;
  }

  .glide-ratings{
    font-size: 12px;
    font-weight: 700;
  }

  .fa-movie-ratings{
    font-size: 10px;
  }

  .glide-watchtime{
    font-size: 12px;
    font-weight: 600;
  }

  .glide-tags{
    font-size: 12px;
    font-weight: 600;
  }
 .glide-info{
    font-size: 13.5px;
 }
}

@media only screen and (max-width: 768px){
.glide__slide{
    height: 30rem;
}
.glide-title{
    font-size: 2rem;
}
.glide-movie-quality{
    font-size: 10px;
    padding: 4px 8px;
}

.glide-ratings{
    font-size: 12px;
}
.glide-ratings{
    font-size: 12px;
}

.glide-tags{
    font-size: 11.75px;
}

.glide-add{
    font-size: 12px;
    font-weight: 600;
}

.glide-watch{
    font-size: 12px;
    font-weight: 600;
}

.glide-info{
    font-size: 13.25px;
}
}

@media only screen and (max-width:650px){
.glide__slide{
    height: 22.5rem;
}



.glide-info{
    display: none;
}

.glide-options{
    margin-top: 1rem;
}

.glide-title{
   font-size: 1.875rem
}


}

    </style>
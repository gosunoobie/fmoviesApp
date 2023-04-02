
<script>
    export let slideImg;
</script>

<li class="glide__slide" style="background-image: url({slideImg})">
        
    <aside class="glide-info-container">
        <h2 class="glide-title">this is the title</h2>
        <div class="glide-details">
            <button>hd</button>
            <div class="glide-ratings">7.80</div>
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
            Jake sully lives with his newfound family formed on the extrasolar moon Pandara.
        </p>

        <div class="glide-options">
            <button class="glide-watch">
                Watch now
            </button>
            <button class="glide-add">
                Add to list
            </button>
        </div>
    </aside>
    
    </li>

    <style>
        .glide__slide{
    width: 100vw;
    background-size: cover;
    height: 36rem;
    background-repeat: no-repeat;
    background-position: top center;
    width: 100vw !important;
        margin: 0 !important;
}
    </style>
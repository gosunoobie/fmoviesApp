
  import { writable } from 'svelte/store';
  export const countryArray = ['Argentina',
    'Australia',
    'Austria',
    'Belgium',
    'Brazil',
    'Canada',
    'China',
    'Czech Republic',
    'Denmark',
    'Finland',
    'France',
    'Germany',
    'Hong Kong',
    'Hungary',
    'India',
    'International',
    'Ireland',
    'Israel',
    'Italy',
    'Japan',
    'Luxembourg',
    'Mexico',
    'Netherlands',
    'New Zealand',
    'Norway',
    'Philippines',
    'Poland',
    'Romania',
    'Russia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'Turkey',
    'United Kingdom',
    'United States']

   export const genreArray = ['Action',
    'Adventure',
    'Animation',
    'Biography',
    'Costume',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Game-Show',
    'History',
    'Horror',
    'Kungfu',
    'Music',
    'Mystery',
    'Reality-TV',
    'Romance',
    'Sci-Fi',
    'Sport',
    'Thriller',
    'TV Show',
    'War',
    'Western'] 

export  const slides = [
  'https://www.hdwallpapers.in/download/zoe_kravitz_colin_farrell_paul_dano_robert_pattinson_4k_hd_the_batman-HD.jpg',
  'https://www.hdwallpapers.in/download/ant_man_black_widow_bruce_banner_captain_america_captain_marvel_carol_danvers_4k_hd_avengers_endgame-HD.jpg',
'https://www.hdwallpapers.in/download/spider_man_art_4k_hd_spider_man_into_the_spider_verse-HD.jpg',
'https://www.hdwallpapers.in/download/red_blue_spiderman_on_glass_door_4k_hd_spiderman-HD.jpg'

];

  export const screenSize = writable(window.innerWidth);
  
 export let breakPoints = {
        Xs : 0,
       Sm : 576,
        Md : 768,
        Lg : 992,
        Xl :1280
}


    //   screenSizeType.set(window.innerWidth <= breakPoints.breakpointSm ? 'small' : window.innerWidth <= breakPoints.Md ?  'medium': window.innerWidth >= breakPoints.Xl ? 'veryLarge': 'large' );


//    $: console.log($screenSize);


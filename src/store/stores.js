
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


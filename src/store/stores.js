
  import { writable } from 'svelte/store';


  export const apiKey = 'c5991897d88bb42408fd5d87948090aa';
 
  export const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
  export const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  export const discoverUrl =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
  export const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  export const trendingTvShowsUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
  
 export const popularTvShowsUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`
  export const batmanUrl =`https://api.themoviedb.org/3/movie/414906?api_key=${apiKey}&language=en-US`






 export  async function fetchAllItems(apiKey,currentUrl,pageCount) {
    const totalPages = pageCount || 1;
    const responses = [];
   
    
  
    // Make a request for each page of items
    for (let i = 1; i <= totalPages; i++) {
      currentUrl += `&page=${i}&language=en-US`;
       const response = await fetch(currentUrl);
      const data = await response.json();
      responses.push(data.results);
      
    }
  
    // Combine the results from all pages into a single array
    let items = responses.flat();
    items = items.slice(0, 24);
    return items;
  }
  
  
  async function fetchItemById(currentUrl){
    const response = await fetch(currentUrl);
    const data = await response.json();
    console.log(data)
    return data;
  }
  



  
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
  {
    "image" : `https://images7.alphacoders.com/130/1307356.jpg`,     
    "id": 603692,
    "original_language": "en",
    "original_title": "John Wick: Chapter 4",
    "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    "genres": [
      {
          "id": 28,
          "name": "Action"
      },
      {
          "id": 53,
          "name": "Thriller"
      },
      {
          "id": 80,
          "name": "Crime"
      }
  ],
    "release_date": "2023-03-22",
    "title": "John Wick: Chapter 4",
    "vote_average": 8,   
    "runtime": 170,
   
  },
  {"image": 'https://www.hdwallpapers.in/download/zoe_kravitz_colin_farrell_paul_dano_robert_pattinson_4k_hd_the_batman-HD.jpg',
  "id" : " 414906",
  "original_title": "The Batman",
  "release_date": "2022-03-01",
  "runtime": 177,
  "genres": [
    {
        "id": 80,
        "name": "Crime"
    },
    {
        "id": 9648,
        "name": "Mystery"
    },
    {
        "id": 53,
        "name": "Thriller"
    }
],
  "vote_average": 7.7,
  "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler."
},

{"image": 'https://images6.alphacoders.com/740/740296.png',
"id": 372058,
"genres": [
  {
      "id": 10749,
      "name": "Romance"
  },
  {
      "id": 16,
      "name": "Animation"
  },
  {
      "id": 18,
      "name": "Drama"
  }
],
"original_title": "君の名は。",
"overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
"release_date": "2016-08-26",
"runtime": 106,
"vote_average": 8.52,
}
,

 {"image": 'https://www.hdwallpapers.in/download/ant_man_black_widow_bruce_banner_captain_america_captain_marvel_carol_danvers_4k_hd_avengers_endgame-HD.jpg',
 "id" : "299536",
 "original_title": "Avengers: Infinity War",
    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.","release_date": "2018-04-25",
    "vote_average": 8.263,
    "runtime": 149,
    "genres": [
      {
          "id": 12,
          "name": "Adventure"
      },
      {
          "id": 28,
          "name": "Action"
      },
      {
          "id": 878,
          "name": "Science Fiction"
      }
  ],
  },
{"image" :'https://www.hdwallpapers.in/download/spider_man_art_4k_hd_spider_man_into_the_spider_verse-HD.jpg',
"id":"324857",
"genres": [
  {
      "id": 28,
      "name": "Action"
  },
  {
      "id": 12,
      "name": "Adventure"
  },
  {
      "id": 16,
      "name": "Animation"
  },
  {
      "id": 878,
      "name": "Science Fiction"
  }
], 
"original_title": "Spider-Man: Into the Spider-Verse",
"overview": "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are transported to this dimension.",
"release_date": "2018-12-14",
"revenue": 375540831,
"runtime": 117,
"vote_average": 8.406,

},


];

  export const screenSize = writable(window.innerWidth);
  export let fetchArray = writable([])
  export let topArray = writable([])
  export let discoverArray = writable([])

  
 export let breakPoints = {
        Xs : 0,
       Sm : 576,
        Md : 768,
        Lg : 992,
        Xl :1280
}


export let randomArray = writable([]);


export function SetRandomArray(data){
//   const randomItems = [];
// while (randomItems.length < 4) {
//   const randomIndex = Math.floor(Math.random() * data.length);
//   const randomItem = data[randomIndex];
//   if (!randomItems.includes(randomItem)) {
//     randomItems.push(randomItem);
//   }

// }
randomArray.update(item=>[...item,data]);

}

export function SetFetchArray(data){
fetchArray.set(data);
}

export function SetTopArray(data){
  topArray.set(data);
  }




  
  export function SetDiscoverArray(data){
    discoverArray.set(data);
  }
  



//import Config from 'react-native-config';

const loginUrl = "https://www.crepolia.com/wp-json/v2/";
const API_TOKEN = '5b56735da6fa480a5128d08e2bf01a5a';

const formdata = new FormData();
    formdata.append("username", "Kady");
    formdata.append("password", "*2606_Kenk_3119K");

const requestOptionsToken = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

/*
export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
*/

export const getFilmsFromApiWithSearchedText = (text, page) => {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => console.log(response.json())  )
    .catch((error) => console.error(error));
}


// Récupération du détail d'un film
export function getFilmDetailFromApi(id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}


export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}

// Récupération des meilleurs films
export function getBestFilmsFromApi(page) {
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_TOKEN + '&vote_count.gte=1000&sort_by=release_date.desc&language=fr&page=' + page)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getCrepoliaToken() {
  return fetch("https://www.crepolia.com/wp-json/api/v1/token", requestOptionsToken)
    .then((response) => response.json())
    .catch(error => console.log('error', error));
};


export function getCrepoliaPosts(TOKEN) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer "+TOKEN);

  const requestOptionsGetPosts = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch("https://crepolia.com/wp-json/wp/v2/posts", requestOptionsGetPosts)
      .then((response) => response.json())
      //.then(result => console.log(JSON.stringify(result, null, 4)))
      .catch(error => console.log('error', error));
};

export function getFromCrepolia(TOKEN,page) {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer "+TOKEN);

  const requestOptionsGetPosts = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch("https://crepolia.com/wp-json/"+page, requestOptionsGetPosts)
      .then((response) => response.json())
      //.then(result => console.log(JSON.stringify(result, null, 4)))
      .catch(error => console.log('error', error));
};

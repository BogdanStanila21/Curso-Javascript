//Crear variables

const listaTweets = document.querySelector('#lista-tweets');


//Event listeners

eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    //Borrar tweets
    listaTweets.addEventListener('click', borrarTweet);

    //Contenido a cargar de local storage
    document.addEventListener('DOMContentLoaded', localStorageListo)
}

//funciones

//añadir tweet del formulario
function agregarTweet(e) {
    e.preventDefault();
    //leer el valor de textarea
    const tweet = document.querySelector('#tweet').value;

    //crear elemento y añadirle a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    listaTweets.appendChild(li);

    //añadir la local storage

    agregarTweetLocalStorage(tweet);

    // Crear la opción de borrar elemento
    const borrarTweet = document.createElement('a');
    borrarTweet.innerText = 'X'
    borrarTweet.classList = 'borrar-tweet';
    li.appendChild(borrarTweet)
}

//Eliminar Tweet
function borrarTweet(e) {
    e.preventDefault();
    //Elimiar tweet
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText)
    }
}

//Función agregar a local storge

function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    //Añadir nuevo tweet
    tweets.push(tweet);

    //convertir de string a arreglo para local storage

    localStorage.setItem('tweets', JSON.stringify(tweets))
}

// Comprobar los elementos de local storage
function obtenerTweetsLocalStorage() {
    let tweets;

    //Miramos valores local storage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets

}

//Mostrar datos de local storage

function localStorageListo() {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(tweet => {
        //crear elemento y añadirle a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        listaTweets.appendChild(li);

        //añadir la local storage


        // Crear la opción de borrar elemento
        const borrarTweet = document.createElement('a');
        borrarTweet.innerText = 'X'
        borrarTweet.classList = 'borrar-tweet';
        li.appendChild(borrarTweet)
    });
}

//Eliminar de local storage

function borrarTweetLocalStorage(tweet){
    let tweets, tweetBorrar;

    //Elimina la ultima letra del string
    tweetBorrar = tweet.substring(0, tweet.length - 1);
    
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach((tweet, index) => {

        if (tweetBorrar === tweet){
            tweets.splice(index, 1)
        }
    })
    localStorage.setItem('tweets', JSON.stringify(tweets))
}
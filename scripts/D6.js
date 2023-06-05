/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().*/

const str1 = "ciao"
const str2 = "marrone"

const es1 = function(str1, str2){
  const strOutput = str1.slice(0,3) + str2.slice(-3)
  return strOutput.toUpperCase()
}

console.log("Stringhe concatenate", es1(str1, str2))


/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso). */

const es2 = function(){
  const arr = []
  for(let i = 0; i < 10; i++)
    arr.push(Math.round(Math.random() * 101))
  return arr
}

const arr2 = es2()

console.log("10 elementi randomici", arr2)


/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)*/

const es3 = arr2.filter(number => number % 2 == 0)
console.log("Elementi randomici pari", es3)


/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array */

let res4 = 0
const es4 = arr2.forEach((number) => res4 += number)
console.log("Somma elementi randomici con forEach", res4)


/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)*/

  const es5 = arr2.reduce((total, number) =>  total += number)
  console.log("Somma elementi randomici con reduce", es5)
  

/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n*/

const es6 = function(n){
    const arrOutput = arr2.map((item) => item + n) 
    return arrOutput
}

console.log("Elementi randomici + n con Map",es6(1))

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5] */

const es8 = function(...strings){
  const strCount = strings.map((item) => item.length)
  return strCount
}

console.log("Conta elementi stringhe con map", es8("Epicode", "is", "great"))


/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99. */

const es9 = function(){
  const arrOutput = []
  for(let i = 1; i < 100; i++)
    if(i % 2 !== 0)
      arrOutput.push(i)
  return arrOutput
}

console.log("Tutti i numeri dispari da 1 a 99", es9())


/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito. */

let oldestMovie = { Year: "3000"}
const es10 = movies.forEach(function(movie){
  if(parseInt(movie.Year) < parseInt(oldestMovie.Year))
    oldestMovie = {...movie}
  })
  
console.log("Il film più vecchio è", oldestMovie)

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito. */

let nMovies = 0
const es11 = movies.forEach(movie => nMovies += 1)
console.log("Numero totale di film", nMovies)


/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito. */

const es12 = movies.map(movie => movie.Title)  
console.log("I titoli dei film sono", es12)


/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.*/

const es13 = movies.filter(movie =>  movie.Year.startsWith("2"))
console.log("I film usciti dopo il 2000 sono", es13)


/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

const es14 = function(id){
  let selectedFilm = movies.filter(function(movie){
    return movie.imdbID === id
  })
  return selectedFilm
}

console.log("Il film selezionato è", es14("tt4154796"))


/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito. */

const es15 = movies.reduce((total, movie) => total + parseInt(movie.Year), 0)
console.log("La somma degli anni è", es15)
"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
        
        if (a != null && b != null && a != false && b != false && a.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();


console.log(personalMovieDB);


// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
        console.log('Отлично, ебать, работает!!!!');
    }
}

showMyDB();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const a = prompt(`Ваш любимый жанр под номером ${i}`, '');
        personalMovieDB.genres.push(a);
    }
}

writeYourGenres();


// let i = 0;

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
          
//           if (a != null && b != null && a != false && b != false && a.length <= 50) {
//             personalMovieDB.movies[a] = b;10
//             console.log('done');
//             i++;
//         } else {
//             console.log('Error');
//         }
// } 

// while (i < 2);

// let i = 0;

// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//           if (a != null && b != null && a != false && b != false && a.length <= 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//             i++;
//         } 
// }




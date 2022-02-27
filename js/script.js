"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const firstFilm = prompt('Один из последних просмотренных фильмов?', ''),
      firstPoints = prompt('На сколько оцените его?', ''),
      secondFilm = prompt('Один из последних просмотренных фильмов?', ''),
      secondPoints = prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstFilm] = firstPoints;
personalMovieDB.movies[secondFilm] = secondPoints;

console.log(personalMovieDB);

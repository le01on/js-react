"use strict";

/* Задание на урок:
1) Первую часть задания повторить по уроку
2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы
3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres
P.S. Функции вызывать не обязательно */

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastWatchedFilmName = prompt('Один з останніх фільмів який Ви подивилися?', '');
        let lastWatchedFilmRating = prompt('На скільки оціните його?', '');

        if (lastWatchedFilmName != null &&
            lastWatchedFilmRating != null &&
            lastWatchedFilmName != '' &&
            lastWatchedFilmRating != '' &&
            lastWatchedFilmName.length < 50) {
            personalMovieDB.movies[lastWatchedFilmName] = lastWatchedFilmRating;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

function showMyDB(obj) {
    if (obj.privat === false) {
        console.log(obj);
    }
}

function writeYourGenres() {
    let genre;

    for (let i = 1; i <= 3; i++) {
        genre = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genre !== null && genre !== '') {
            personalMovieDB['genres'].push(genre);
        } else {
            i--;
        }
    }
}


let numberOfFilms;
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB);
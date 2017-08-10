angular.module("app").controller('movieChoiceCtrl', function ($scope, $stateParams, movie) {
    $scope.movie = movie;
    $scope.moviePoster = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    $scope.movieBackdrop = 
    console.log(movie)
})

/*

backdrop_path
:
"/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg"
belongs_to_collection
:
{id: 10, name: "Star Wars Collection", poster_path: "/ghd5zOQnDaDW1mxO7R5fXXpZMu.jpg", backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"}

genres
:
(3) [{…}, {…}, {…}]
homepage
:
"http://www.starwars.com/films/rogue-one"
id
:
330459
imdb_id
:
"tt3748528"
original_language
:
"en"
original_title
:
"Rogue One: A Star Wars Story"
overview
:
"A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy."
popularity
:
10.481519
poster_path
:
"/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg"
production_companies
:
(5) [{…}, {…}, {…}, {…}, {…}]
production_countries
:
[{…}]
release_date
:
"2016-12-14"
revenue
:
1053929274
runtime
:
133
spoken_languages
:
[{…}]
status
:
"Released"
tagline
:
"A Rebellion Built on Hope"
title
:
"Rogue One: A Star Wars Story"
video
:
false
vote_average
:
7.4
vote_count
:
4545
*/
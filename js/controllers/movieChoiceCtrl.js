angular.module("app").controller('movieChoiceCtrl', function ($scope, $stateParams, movie) {
    $scope.movie = movie;
    var movieData = [];
    $scope.movieData = movieData.push(movie.title)
    console.log(movieData);
})
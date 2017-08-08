angular.module("app").controller('movieChoiceCtrl', function ($scope, $stateParams, movie) {
    $scope.movie = movie;
    var movieData = [];
    $scope.movieData = movieData.push(movie.0)
    console.log(movieData);
})
angular.module('app')
    .controller('mainCtrl', function ($scope, $state, mainSrv) {


        $scope.getMovieTitleData = function (movieTitleParam) {
            // console.log(movieTitleParam)
            $state.go('searchresult', {movie: movieTitleParam})
        }
    })




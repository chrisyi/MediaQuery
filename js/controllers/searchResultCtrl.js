angular.module("app").controller('searchResultCtrl', function ($scope, $stateParams, mainSrv, $state) {
    console.log($stateParams)
    mainSrv.getMovieTitleData($stateParams.movie).then(function (response) {
        console.log(response)
        $scope.movieSearchData = response;
    })
    $scope.viewmovie = function (id) {
        $state.go('moviechoice', { movie: id })
    }
})
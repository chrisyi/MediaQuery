angular.module("app").controller('searchResultCtrl', function($scope, $stateParams, mainSrv){
    console.log($stateParams)
    mainSrv.getMovieTitleData($stateParams.movie).then(function(response) {      
        console.log(response)
        $scope.movieData = response;            
    })
})
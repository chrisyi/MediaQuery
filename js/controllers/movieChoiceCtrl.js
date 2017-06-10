angular.module("app").controller('movieChoiceCtrl', function($scope, $stateParams, mainSrv){
    console.log($stateParams)
    mainSrv.getMovieIdData($stateParams.movie).then(function(response) {      
        console.log(response)
        $scope.movieData = response;  
                 
    })
    

    $scope.test = 'test'
})
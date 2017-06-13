angular.module("app").controller('movieChoiceCtrl', function($scope, $stateParams, mainSrv){
    mainSrv.getMovieIdData($stateParams.movie).then(function(response) {      
        console.log(response)
        $scope.movieData = response;  
                 
    })
    

})
angular.module('app')
    .controller('mainCtrl', function ($scope, $state, mainSrv) {


        $scope.getMovieTitleData = function (movieTitleParam) {
            // console.log(movieTitleParam)
            $state.go('searchresult', { movie: movieTitleParam })
        }

        
        

        mainSrv.getPopularMovieBackground().then(function (response) {
             var random = response[Math.floor(Math.random()*response.length)]
             var bgImages = document.getElementById("bgImages");
             bgImages.style.backgroundImage = "url("+ random +")";
             bgImages.style.height = "100vh";
             bgImages.style.width = "100vw";
             bgImages.style.backgroundSize = "cover";
             bgImages.style.repeat = "no-repeat"
             bgImages.style.backgroundPosition = "top center"
        })
    })




angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
                controller: 'mainCtrl'
            })
            .state('searchresult', {
                url: '/searchresult/:movie',
                templateUrl: './views/search-result.html',
                controller: 'searchResultCtrl'
            })
            .state('moviechoice', {
                url: '/moviechoice/:movie',
                templateUrl: './views/movie-choice.html',
                controller: 'movieChoiceCtrl',
                resolve: {
                    movie: function(mainSrv, $stateParams, $state) {
                         return mainSrv.getMovieIdData($stateParams.movie).then(function(response) {   
                            return response;  
                        }).catch(function(){
                            $state.go("home")
                        })
                    }
                }
            })
            .state('about', {
                url: '/about/',
                templateUrl: './views/about.html',
                controller: 'aboutCtrl'
            })

        $urlRouterProvider
            .otherwise('/')
    })

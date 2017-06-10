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
                templateUrl: '../views/search-result.html',
                controller: 'searchResultCtrl'
            })
            .state('moviechoice', {
                url: '/moviechoice/:movie',
                templateUrl: '../views/movie-choice.html',
                controller: 'movieChoiceCtrl'
            })

        $urlRouterProvider
            .otherwise('/')
    })
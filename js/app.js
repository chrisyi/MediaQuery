angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('home', {
                url: '/',
            })

        $urlRouterProvider
            .otherwise('/')
    })
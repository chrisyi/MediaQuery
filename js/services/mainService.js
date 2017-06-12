angular.module('app')
    .service('mainSrv', function ($http, $q) {


        //service for home
        this.getPopularMovieBackground = function () {
            return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=488445c2f5175ddb3f6e335c1e55ce4c&language=en-US&page=1')
                .then(function (response) {
                    var bgArray = [];
                    var results = response.data.results;
                    for (var i = 0; i < results.length; i++) {
                        bgArray.push('https://image.tmdb.org/t/p/original' + results[i].poster_path)
                    }
                    console.log(bgArray)
                    return bgArray;
                })
        }

        // this.randomImage = function () {
            
        //     this.bgArray[Math.floor(Math.random()*bgArray.length)]
        // }






        //service for search-result
        this.getMovieTitleData = function (searchQuery) {
            return $http.get('https://api.themoviedb.org/3/search/movie?api_key=488445c2f5175ddb3f6e335c1e55ce4c&language=en-US&query='
                + searchQuery + '&page=1&include_adult=false')
                .then(function (response) {
                    console.log(response)
                    var finalArray = [];
                    var results = response.data.results;
                    for (var i = 0; i < results.length; i++) {
                        var movieObj = {
                            Id: results[i].id,
                            Title: results[i].title,
                            ReleaseDate: results[i].release_date,
                            PosterPath: 'https://image.tmdb.org/t/p/w300/' + results[i].poster_path,
                            GenreIds: results[i].genre_ids,
                        }
                        finalArray.push(movieObj)
                    }
                    return finalArray;
                })
        }


        //service for movie-choice
        this.getMovieIdData = function (id) {
            var promise = new Promise(function (resolve, reject) {
                var results = []
                $http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=488445c2f5175ddb3f6e335c1e55ce4c')
                    .then(function (response) {
                        results.push(response.data)
                        if (results.length > 1) {
                            resolve(Object.assign({}, results[0], results[1]))
                        }
                    })
                $http.get('https://api.themoviedb.org/3/movie/' + id + '/credits?api_key=488445c2f5175ddb3f6e335c1e55ce4c')
                    .then(function (response) {
                        results.push(response.data)
                        if (results.length > 1) {
                            resolve(Object.assign({}, results[0], results[1]))
                        }
                    })
            })
            return promise

        }


    })

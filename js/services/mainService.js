angular.module('app')
    .service('mainSrv', function ($http, $q) {

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

    })

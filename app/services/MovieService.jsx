import $ from 'jquery';

const API_URL = 'http://www.omdbapi.com';

class MovieService{
    static getMovies(search){
        var url = `${API_URL}/?s=${search}`;
        var deferred = $.Deferred();

        $.ajax({
            url: url,
            success: function(result){
                deferred.resolve(result.Search);
            },
            error: function(error){
                deferred.reject(error);
            }
        });

        return deferred.promise();
    }
    static getMovie(imdbID){
        var url = `${API_URL}/?t=${imdbID}`;
        var deferred = $.Deferred();

        $.ajax({
            url: url,
            success: function(result){
                deferred.resolve(result.Search);
            },
            error: function(error){
                deferred.reject(error);
            }
        });

        return deferred.promise();
    }
}

export default MovieService;
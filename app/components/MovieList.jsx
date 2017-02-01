import React from 'react';
import Movie from 'Movie';

class MovieList extends React.Component{
    render(){
        var movies = this.props.movies;
        var renderMovies = function(){
            return movies.map((movie, index) => {
                return(
                    <Movie
                        key={index}
                        movie={movie}
                    />
                )
            });
        };

        var style = {
            display: 'flex',
            flexWrap: 'wrap'
        };

        return(
            <div className="movies" style={style}>
                {renderMovies()}
            </div>
        )
    }
}

export default MovieList;
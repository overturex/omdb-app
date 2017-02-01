import React from 'react';
import MovieList from 'MovieList';
import MovieSearchForm from 'MovieSearchForm';
import MovieService from 'MovieService';
import MovieModel from 'MovieModel';
import Loading from 'Loading';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            movies: [],
            filteredMovies: [],
            filters: []
        };
        this.getMovies = this.getMovies.bind(this);
        this.handleWithPosterOnlyFilter = this.handleWithPosterOnlyFilter.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
        this.handleTypeFilter = this.handleTypeFilter.bind(this);
        this.filterMovies = this.filterMovies.bind(this);
    }
    getMovies(search){
        this.setState({
            loading: true,
            movies: [],
            filteredMovies: []
        });
        MovieService.getMovies(search)
            .then(function(data){
                if(data) {
                    var movies = data.map((movie) => new MovieModel(movie));
                    var filteredMovies = this.filterMovies(movies);

                    this.setState({
                        loading: false,
                        movies: movies,
                        filteredMovies: filteredMovies
                    });
                }
                else{
                    this.setState({
                        loading: false
                    });
                }
            }.bind(this));
    }
    filterMovies(movies, filters=this.state.filters){
        var filteredMovies = movies;
        if(filters.length > 0){

            filters.forEach((filter)=>{
                if(filter.name === 'with-poster-only'){
                    filteredMovies = movies.filter((movie) => movie.poster !== 'N/A');
                }
                else if(filter.name === 'type'){
                    filteredMovies = movies.filter((movie) => movie.type === filter.value);
                }
            });
        }
        return filteredMovies;
    }
    handleWithPosterOnlyFilter(checked){
        var filters = Object.assign([], this.state.filters);
        var filteredMovies;

        if(checked){
            filters.push({name: 'with-poster-only'});
        }
        else{
            filters = this.state.filters.filter((filter) => filter.name !== 'with-poster-only');
        }

        filteredMovies = this.filterMovies(this.state.movies, filters);

        this.setState({
            filters: filters,
            filteredMovies: filteredMovies
        });
    }
    handleTypeFilter(type){
        var filters = Object.assign([], this.state.filters);
        var filteredMovies;

        if(type){
            var hasTypeFilter = false;
            filters.forEach((filter) => {
                if(filter.name === 'type'){
                    filter.value = type;
                    hasTypeFilter = true;
                }
            });
            if(!hasTypeFilter){
                filters.push({name: 'type', value: type});
            }
        }
        else{
            filters = filters.filter((filter) => filter.name !== 'type');
        }

        filteredMovies = this.filterMovies(this.state.movies, filters);

        this.setState({
            filters: filters,
            filteredMovies: filteredMovies
        });
    }
    clearSearch(){
        this.setState({
            loading: false,
            movies: [],
            filteredMovies: [],
            filters: []
        });
    }
    render(){
        var renderLoading = () => {
            if(this.state.loading){
                return(
                    <Loading/>
                );
            }
        };

        return(
            <div>
                <MovieSearchForm
                    handleSearch={this.getMovies}
                    handleWithPosterOnlyFilter={this.handleWithPosterOnlyFilter}
                    handleTypeFilter={this.handleTypeFilter}
                    clearSearch={this.clearSearch}
                    movies={this.state.movies}
                />
                <MovieList movies={this.state.filteredMovies}/>
                {renderLoading()}
            </div>
        );
    }
}


export default Home;
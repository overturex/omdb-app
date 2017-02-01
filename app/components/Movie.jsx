import React from 'react';

class Movie extends React.Component{
    render(){

        const noImage = 'https://cdn0.iconfinder.com/data/icons/large-glossy-icons/512/No.png';

        var poster = this.props.movie.poster != 'N/A' ? this.props.movie.poster : noImage;

        // return(
        //     <div className="movie" style={{borderBottom: '1px solid #F0F0F0', padding: '10px 0'}}>
        //         <div className="container-fluid">
        //             <div className="row-fluid">
        //                 <div className="col-xs-3">
        //                     <img className="movie-poster" src={poster} style={{width: '100%'}}/>
        //                 </div>
        //                 <div className="col-xs-9">
        //                     <h3 className="movie-title">{this.props.movie.title}</h3>
        //                     <span className="movie-title">{this.props. movie.type}</span>
        //                     <span>, </span>
        //                     <span className="movie-title">{this.props.movie.year}</span>
        //                     <span>, </span>
        //                     <a className="btn btn-xs btn-warning" href={'http://www.imdb.com/title/' + this.props.movie.imdbID} target="_blank">imdb</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // );

        return(
            <div className="movie">
                <div className={poster != noImage ? "movie-poster" : "movie-poster no-image"}>
                    <img src={poster}/>
                </div>
                <div className="movie-info">
                    <div className="movie-title"><strong title={this.props.movie.title}>{this.props.movie.title}</strong></div>
                    <small>{`${this.props. movie.type}, ${this.props.movie.year}`}</small>
                    <a className="btn btn-xs btn-warning" href={'http://www.imdb.com/title/' + this.props.movie.imdbID} target="_blank">imdb</a>
                </div>
            </div>
        )
    }
}

export default Movie;
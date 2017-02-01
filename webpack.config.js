var webpack = require('webpack');

module.exports = {
    entry: './app/main.jsx',
    output: {
        path: __dirname + '/public/',
        filename: './js/main.js'
    },
    resolve:{
        root: __dirname,
        alias: {
            'MovieService': 'app/services/MovieService.jsx',
            'UserService': 'app/services/UserService.jsx',
            'MovieModel': 'app/models/MovieModel.jsx',
            'MovieDetailsModel': 'app/models/MovieDetailsModel.jsx',
            'MovieApp': 'app/components/MovieApp.jsx',
            'Movie': 'app/components/Movie.jsx',
            'MovieDetails': 'app/components/MovieDetails.jsx',
            'MovieList': 'app/components/MovieList.jsx',
            'MovieSearchForm': 'app/components/MovieSearchForm.jsx',
            'Home': 'app/components/Home.jsx',
            'Login': 'app/components/Login.jsx',
            'Nav': 'app/components/Nav.jsx',
            'Template': 'app/components/Template.jsx',
            'Loading': 'app/components/Loading.jsx',
            'Dropdown': 'app/components/Dropdown.jsx',
        },
        extensions: ['', '.js', 'jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'babel-preset-es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules | bower_components)/
            }
        ]
    }
};
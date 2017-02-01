import 'jquery';
import Backbone from 'backbone';

var MovieModel = Backbone.Model.extend({
    initialize: function(data){
        if(data) {
            this.poster = data.Poster;
            this.title = data.Title;
            this.type = data.Type;
            this.year = data.Year;
            this.imdbID = data.imdbID;
        }
    },
    defaults: {
        poster: '',
        title: '',
        type: '',
        year: ''
    }
});

export default MovieModel;
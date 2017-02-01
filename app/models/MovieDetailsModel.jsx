import 'jquery';
import Backbone from 'backbone';

var MovieDetailsModel = Backbone.Model.extend({
    initialize: function(data){
        if(data) {
            this.plot = data.Plot;
            this.imdbRating = data.imdbRating;
        }
    },
    defaults: {
        plot: '',
        imdbRating: ''
    }
});

export default MovieDetailsModel;
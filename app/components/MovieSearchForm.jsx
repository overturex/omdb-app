import React from 'react';
import Dropdown from 'Dropdown';

class MovieSearchForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            searched: ''
        };
        this.onChange = this.onChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleWithPosterOnlyFilter = this.handleWithPosterOnlyFilter.bind(this);
        this.handleTypeFilter = this.handleTypeFilter.bind(this);
        this.clearSearch = this.clearSearch.bind(this);
    }
    onChange(e){
        this.setState({search: e.target.value});
    }
    handleSearch(e){
        e.preventDefault();
        var search = this.state.search;
        this.setState({search: '', searched: search});
        this.props.handleSearch(search);
    }
    handleWithPosterOnlyFilter(e){
        var checked = e.target.checked;
        this.props.handleWithPosterOnlyFilter(checked);
    }
    handleTypeFilter(e){
        var type = e.target.value;
        this.props.handleTypeFilter(type);
        console.log(type);
    }
    clearSearch(){
        this.setState({searched: ''});
        this.props.clearSearch();
    }
    render(){

        var renderResultHeader = ()=>{
            if(this.state.searched){
                return(
                    <div>
                        <h5>
                            Search result for <span style={{color: '#d9534f'}}>{this.state.searched}</span> <button type="button" className="btn btn-xs btn-danger" onClick={this.clearSearch}>x</button>
                        </h5>
                        <small>{this.props.movies.length} record(s) found!</small>
                    </div>
                );
            }
        };

        var renderFilters = () =>{
            if(this.state.searched){
                return(
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" onChange={this.handleWithPosterOnlyFilter}/> with poster only
                                </label>
                            </div>
                            {/*<select className="form-control" onChange={this.handleTypeFilter}>*/}
                                {/*<option value="">all</option>*/}
                                {/*<option value="movie">movie only</option>*/}
                                {/*<option value="series">series only</option>*/}
                            {/*</select>*/}
                            <Dropdown
                                options={[{name: 'all', value:''}, {name: 'movie only', value: 'movie'}, {name: 'series only', value: 'series'}]}
                                onChange={this.handleTypeFilter}
                            />
                        </div>
                    </div>
                );
            }
        };

        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form onSubmit={this.handleSearch}>
                            <div className="input-group">
                                <input type="text" className="form-control" name="search" value={this.state.search} onChange={this.onChange} placeholder="search by title" autoComplete="off"/>

                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn-success">search</button>
                                </span>
                            </div>
                            {renderResultHeader()}
                        </form>
                    </div>
                </div>
                {renderFilters()}
            </div>
        );
    }
}

export default MovieSearchForm;
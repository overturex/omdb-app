import React from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: props.selected || props.options[0],
            expanded: false
        };
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
        this.onSelectedClick = this.onSelectedClick.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
    }
    componentDidMount(){
        document.addEventListener('click', this.handleOutsideClick, true);
    }
    componentWillUnmount(){
        document.removeEventListener('click', this.handleOutsideClick, true);
    }
    handleOutsideClick(e){
        if(!ReactDOM.findDOMNode(this).contains(e.target)) {
            this.setState({expanded: false});
        }
    }
    onSelectedClick(e){
        this.setState({expanded: !this.state.expanded});
    }
    onOptionClick(e){
        var selected = this.props.options.find((option) => option.value == e.target.value);
        this.setState({selected: selected, expanded: false});
        this.props.onChange(e);
    }
    render(){

        var renderSelected = () => {
            return (
                <button type="button" className="btn option selection" value={this.state.selected.value} onClick={this.onSelectedClick}>
                    {this.state.selected.name}
                    <span className="pull-right">
                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                        </span>
                </button>
            );
        };

        var renderOptions = () => {
            if (this.state.expanded) {
                return this.props.options.map((option, index) => (
                    <button
                        type="button"
                        className={this.state.selected == option ? 'btn option selected' : 'btn option'}
                        key={index}
                        value={option.value}
                        onClick={this.onOptionClick}
                    >
                        {option.name}
                    </button>)
                );
            }
        };

        return(
            <div className="dropdown">
                {renderSelected()}
                {renderOptions()}
            </div>
        );
    }
}

export default Dropdown;
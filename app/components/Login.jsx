import React from 'react';
import UserService from 'UserService';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();

        UserService.login(this.state.username, this.state.password)
            .then(function(response){
                if(response.OK){
                    this.props.route.handleLogin(true);
                    this.props.router.push(this.props.route.loginTo);
                }
                else{
                    console.log(response.message);
                }
            }.bind(this));

    }
    onChange(e){
        var attribute = {};
        attribute[e.currentTarget.name] = e.currentTarget.value;
        this.setState(attribute);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.onChange} placeholder="username" autoComplete="off" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="password" value={this.state.password} onChange={this.onChange} placeholder="password" autoComplete="off" />
                </div>
                <button type="submit" className="btn btn-success">login</button>
            </form>
        );
    }
}

export default Login;
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Template from 'Template';
import Home from 'Home';
import Login from 'Login';

class MovieApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: false,
            loginTo: '/'
        };
        this.requireAuth = this.requireAuth.bind(this);
        this.setUser = this.setUser.bind(this);
    }
    requireAuth(nextState, replace){
        // if(!this.state.user){
        //     replace('/login');
        // }
    }
    setUser(user){
        this.setState({user: user});
    }
    render(){

        return(
            <Router history={browserHistory} ref="router">
                <Route path="/" component={Template}>
                    <IndexRoute component={Home} onEnter={this.requireAuth}/>
                    <Route path="login" component={Login} loginTo={this.state.loginTo} handleLogin={this.setUser}/>
                </Route>
            </Router>
        );
    }
}

export default MovieApp;
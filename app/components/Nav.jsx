import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <IndexLink to="/" className="navbar-brand">R + B</IndexLink>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
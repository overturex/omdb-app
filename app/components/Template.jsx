import React from 'react';
import Nav from 'Nav';

class Template extends React.Component{
    render(){

        var mainStyle = {
            width: '500px',
            margin: '0 auto'
        };

        var wrapperStyle = {
            marginBottom: '-60px'
        };

        var wrapperSpaceStyle = {
            height: '60px'
        };

        var footerStyle = {
            position: 'fixed',
            bottom:0,
            height: '60px',
            lineHeight: '60px',
            textAlign: 'center',
            width: '100%',
            backgroundColor: '#e7e7e7'
        };

        return(
            <div>
                <div className="wrapper" style={wrapperStyle}>
                    <header>
                        <Nav/>
                    </header>
                    <main style={mainStyle}>
                        {this.props.children}
                    </main>
                    <div className="wrapper-space" style={wrapperSpaceStyle}></div>
                </div>
                <footer style={footerStyle}>
                    Copyright &copy; {(new Date()).getFullYear()}
                </footer>
            </div>
        );
    }
}

export default Template;
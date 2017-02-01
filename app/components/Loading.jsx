import React from 'react';

class Loading extends React.Component{
    render(){

        var style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-60px',
            marginLeft: '-60px'
        };

        return(
            <div style={style}>
                <img src="img/loading.svg" alt="loading" />
            </div>
        );
    }
}

export default Loading;
import React from 'react';
import Link from 'react-router-dom';

const Header = ({children}) => {

    // const { Component } = props;

    const style = {
        display: 'ínline-block',
        margin: 10,
        marginBottom: 30
    }

    return (
        <div>
            <div>
                <h3 style={style}><Link to='/'>App</Link></h3>
                <h3 style={style}><Link to='/jokes'>Jokes</Link></h3>
            </div>
            {children}
            {/* <Component /> */}
        </div>
    )
}

export default Header;

import React, { Component } from 'react';
import Login from './auth/login/login.component'
class Main extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <Login />
            </React.Fragment>
        );
    }
}
 
export default Main;
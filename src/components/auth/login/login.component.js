import React, { Component } from 'react';

class Login extends React.Component {
    state = {
        username: "Nilaw"
    }

    render() { 
        console.log("state ===>", this.state);

        return (
            <React.Fragment>
                
                <form className="border container p-5 form-group mt-5">
                    <h1>Login</h1>
                    <label htmlFor="username"></label>
                    <input className="form-control" type="text" placeholder="Username" name="username" id="username"></input>

                    <label htmlFor="password"></label>
                    <input className="form-control" type="password" placeholder="Password" name="password" id="password"></input>

                    <hr></hr>

                    <button className="btn bg-success" type="submit">Login</button>
                </form>
            </React.Fragment>
        );
    }
}
 
export default Login;
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Login from "../Components/Login";


class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: false,
            email: null,
            password: null,
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onClick() {
        // This is a simple example of how authentication
        // would work. You will need to write an API
        // web-service and replace this code with making
        // API calls and validating.
        if (this.state.email === "bart@mika.com") {
            if (this.state.password === "123password") {
                this.setState({
                    loginStatus: true
                })
            }
        }
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    render() {
        const { loginStatus } = this.state;
        if (loginStatus === true) {
            return <Redirect to="/dashboard" />
        }
        return (
            <Login
               onClick={this.onClick}
               onChange={this.onChange}
               email={this.state.email}
               password={this.state.password}
            />
        )
    }
}


export default LoginContainer;

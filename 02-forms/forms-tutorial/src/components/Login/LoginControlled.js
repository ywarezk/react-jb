/**
 * class component
 * login form
 * controlled
 * Binding
 */

 import React from 'react';

 export default class LoginControlled extends React.Component {
     state = {
         email: 'yariv@nerdeez.com',
         password: '',
         names: 3
        //  emailDisabled: false
     }

     handleEmailChange = (event) => {
        this.setState({
            email : event.target.value
        })
     }


     handlePasswordChange = (event) => {
        this.setState({
            password : event.target.value
        })
     }

     handleChange = (event) => {
         this.setState({
            [event.target.name]: event.target.value
         })
        
     }

     handleLogin = (event) => {
        // grab the email and password user typed
        // print them to the console


        console.log(`email: ${this.state.email} password: ${this.state.password}`)

        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleLogin} noValidate >
                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" />
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" />

                <select value={this.state.names}>
                    <option value="1">Rotem</option>
                    <option value="2">Shimon</option>
                    <option value="3">Alexandra</option>
                </select>
                <button>Login</button>
            </form>
        )

    }

 }
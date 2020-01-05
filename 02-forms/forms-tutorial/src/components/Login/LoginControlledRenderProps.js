/**
 * class component
 * login form
 * controlled
 * Binding
 */

 import React from 'react';
//  import noop from '../../hoc/noop';
import forms from '../../hoc/forms';
import Noop from '../../renderprops/noop.renderprops';
import StrongerForm from '../../renderprops/forms.renderprops';

 class LoginControlled extends React.Component {
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

    handleLogin = (event) => {
        console.log(`email: ${this.props.values.email} password: ${this.props.values.password}`)
        event.preventDefault();
    }

    render() {

        return <StrongerForm initialState={ {email: 'yariv@nerdeez.com', password: '12345'} } render={(handleChange, values) => {
            return (
                <form onSubmit={this.handleLogin} noValidate >
                    <h1>{this.props.title}</h1>
                    <input value={values.email} onChange={handleChange} type="email" name="email" />
                    <input value={values.password} onChange={handleChange} type="password" name="password" />
                    <button>Login</button>
                </form>  
            )
        }} />

        /*
        return <Noop render={() => {
            return (
                <form onSubmit={this.handleLogin} noValidate >
                    <h1>{this.props.title}</h1>
                    <input value={this.props.values.email} onChange={this.props.handleChange} type="email" name="email" />
                    <input value={this.props.values.password} onChange={this.props.handleChange} type="password" name="password" />
                    <button>Login</button>
                </form>  
            )
        }} />*/

        // return (
        //     <form onSubmit={this.handleLogin} noValidate >
        //         <h1>{this.props.title}</h1>
        //         <input value={this.props.values.email} onChange={this.props.handleChange} type="email" name="email" />
        //         <input value={this.props.values.password} onChange={this.props.handleChange} type="password" name="password" />
        //         <button>Login</button>
        //     </form> 
        // )

    }

 }
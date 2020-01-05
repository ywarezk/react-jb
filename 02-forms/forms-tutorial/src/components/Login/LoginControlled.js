/**
 * class component
 * login form
 * controlled
 * Binding
 */

 import React from 'react';
//  import noop from '../../hoc/noop';
import forms from '../../hoc/forms';

 class LoginControlled extends React.Component {
    //  state = {
    //      email: 'yariv@nerdeez.com',
    //      password: '',
    //      names: 3
    //     //  emailDisabled: false
    //  }

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

    //  handleChange = (event) => {
    //      this.setState({
    //         [event.target.name]: event.target.value
    //      })
        
    //  }

     handleLogin = (event) => {
        // grab the email and password user typed
        // print them to the console


        console.log(`email: ${this.props.values.email} password: ${this.props.values.password}`)

        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleLogin} noValidate >
                <h1>{this.props.title}</h1>
                <input value={this.props.values.email} onChange={this.props.handleChange} type="email" name="email" />
                <input value={this.props.values.password} onChange={this.props.handleChange} type="password" name="password" />

                {/* <select value={this.state.names}>
                    <option value="1">Rotem</option>
                    <option value="2">Shimon</option>
                    <option value="3">Alexandra</option>
                </select> */}
                <button>Login</button>
            </form>
        )

    }

 }

 // hoc doesnt need arguyments
//  export default noop(LoginControlled);

// hoc that required argument

const formHoc = forms({
    email: 'yariv@nerdeez.com',
    password: '12345'
});

const StrongerLogin = formHoc(LoginControlled)

export default StrongerLogin;


// export default forms({
//     email: 'yariv@nerdeez.com',
//     password: '12345'
// })(LoginControlled);

// no!
// forms({...}, LoginControlled)
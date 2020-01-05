/**
 * building a login form
 */

 import React, {createRef} from 'react';


// uncontrolled - deal with the form only on the submit function

 export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.emailInput = createRef();
        this.passwordInput = createRef();
    }


    handleLogin = (event) => {
        // grab the email and password user typed
        // print them to the console


        console.log(`email: ${this.emailInput.current.value} password: ${this.passwordInput.current.value}`)

        event.preventDefault();
    }

    render() {

        return (
            <form onSubmit={this.handleLogin} >
                <input ref={this.emailInput}  type="email" name="email" />
                <input ref={this.passwordInput} type="password" name="password" />
                <button>Login</button>
            </form>
        )

    }

 }
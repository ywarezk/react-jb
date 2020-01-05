

import React from 'react';

export default class Register extends React.Component {
    state = {
        email: '',
        password:'',
        firstName: '',
        lastName: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
       
    }

    render() {
        <form noValidate onSubmit={this.handleSubmit}>
            <input value={this.state.email} onChange={handleChange} />
        </form>
    }
}
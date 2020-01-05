
import React, {useState} from 'react';




export default () => {

    const [formState, setFormState] = useState({
        email: 'yariv@nerdeez.com',
        password: ''
    });

    const handleChange = (event) => {
        // formState[event.target.name] = event.target.value
        // setFormState(formState);
        // const newState = 

        // const newFormState = Object.clone(formState);
        // newFormState[event.target.name] = event.target.value
        // setFormState(newFormState)
        // {email: ..., password: ...}
        setFormState({
            ...formState,
           [event.target.name]: event.target.value
        })
    }

    const handleLogin =  (event) => {
        // grab the email and password user typed
        // print them to the console
        
        console.log(`email: ${formState.email} password: ${formState.password}`)
        event.preventDefault();
    }

    return (
        <form onSubmit={handleLogin} noValidate >
            <input value={formState.email} onChange={handleChange} type="email" name="email" />
            <input value={formState.password} onChange={handleChange} type="password" name="password" />
            <button>Login</button>
        </form>
    )

}
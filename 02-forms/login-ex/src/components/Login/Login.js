import React, {useState, useContext} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import userService from '../../services/user.service';
import JwtContext from '../../contexts/jwt.context';

export default () => {
    const {setToken} = useContext(JwtContext)
    // const setToken = jwtObj.setToken;
    const [error, setError] = useState(null);


    const handleLogin = (values) => {
        userService.login(values.email, values.password).then(
            (token) => {
                // TBD
                setToken(token);
            },
            (err) => {
                setError(err)
            }
        )
    }

    return (
        <Formik
            initialValues={ {email: 'yariv@nerdeez.com', password: ''} }
            onSubmit={handleLogin}
        >
            <Form>
                <Field type="email" name="email" placeholder="Email..." />
                <Field type="password" name="password" placeholder="Password" />
                <button type="submit">Submit</button>

                {
                    error && <div>{error.message}</div>
                }
            </Form>
        </Formik>
    )
}


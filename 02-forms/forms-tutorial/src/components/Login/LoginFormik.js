/**
 * Login
 * binding 
 * validation
 * errors
 */


 import React from 'react';
 import {Formik, Form, Field, ErrorMessage} from 'formik';
 import yup from 'yup';

 const loginSchema = yup.object().shape({
     email: yup.string().email('shimon said better mail').required(),
     password: yup.string().required()
 });

 export default () => {
     // values => {email: '...', password: '...'}
     const handleLogin = (values) => {
        console.log(values);
     }

    return (
        <Formik
            initialValues={ {email: 'yariv@nerdeez.com', password: '12345'} }
            onSubmit={handleLogin}
            validationSchema={loginSchema}
        >
            <Form>
                <Field type="email" name="email" />
                <ErrorMessage name="email" />
                <Field type="password" name="password" />
                <ErrorMessage name="password" />
                <button>submit</button>
            </Form>
        </Formik>
    )
 }
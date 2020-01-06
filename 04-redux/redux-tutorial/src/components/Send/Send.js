import React from 'react';
import {Formik, Form, Field} from 'formik';
import {connect} from 'react-redux';
import {setMessage} from '../../redux/action';

const Send =  ({setMessage}) => {
    const handleSubmit = (values) => {
        console.log(values);
        setMessage(values.message);
    }

    return (
        <Formik
            initialValues={ {message: ''} }
            onSubmit={handleSubmit}
        >
            <Form>
                <Field name="message" placeholder="Type message to change the state..." />
                <button type="submit">Change Message</button>
            </Form>
        </Formik>
    )
}

export default connect(
    null,

    {
        setMessage
    }
)(Send);
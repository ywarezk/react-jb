
import React from 'react';
import {View, TextInput, Button} from 'react-native';
import { Formik } from 'formik';


// class Formik extends React.Component {
//     // this.props.onSubmit

//     handleSubmit = () => {
//         // some formik logic like validation
//         // ...

//         this.props.onSubmit()
//     }
// }

export default () => {
    const login = (values) => {
        console.log(values);
    }

    return (
        <Formik
            initialValues={ {email: 'yariv@nerdeez.com', password: ''} }
            onSubmit={login}
        >
            {
                (strongFromFormik) => {
                    return (
                        <View>                            
                            <TextInput 
                                onBlur={strongFromFormik.handleBlur('email')}
                                value={strongFromFormik.values.email}
                                onChangeText={strongFromFormik.handleChange('email')} placeholder="Email" name="email" />
                            <TextInput 
                                onBlur={strongFromFormik.handleBlur('password')}
                                value={strongFromFormik.values.password}
                            onChangeText={strongFromFormik.handleChange('password')} placeholder="Password" name="password" />
                            <Button  onPress={strongFromFormik.handleSubmit} title="Login" />
                        </View>
                    )
                }
            }

            
        </Formik>
        
    );
}
/**
 * custom hooks
 * repeating code in function components
 * move that code to a third function
 */

 import {useState} from 'react';


 //useForm.handleChange
 export default function useForms(initialState) {

    const [formState, setFormState] = useState(initialState);

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

    return [formState, handleChange];

 }
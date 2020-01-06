/**
 * Component that calls the todo list when i get the token
 */

 import React, {useContext, useEffect, useState} from 'react';
 import JWTContext from '../../contexts/jwt.context';
 import todoService from '../../services/todo.service';

 export default () => {
    const contextObj = useContext(JWTContext);
    const token = contextObj.token;
    // const {token} = useContext(JWTContext);

    // const token = 'we need to get this from login'


    // if (token) {
    //     // send request to server
    // }

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (token) {
            todoService.getTodos(token).then((todos) => {
                setTodos(todos)
            })
        }
    }, [token])
     
    return (
        <ul>
            {
                todos.map((singleItem) => {
                    return <li key={singleItem.id}>{singleItem.title}</li>
                })
            }
        </ul>
    )
 }
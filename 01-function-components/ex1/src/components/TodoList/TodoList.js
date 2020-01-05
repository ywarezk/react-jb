/**
 * goto server and grab the todo list and present the todo list
 */

import React, {useEffect, useState} from 'react';
import todoService from '../../services/todo.service';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList() {

    // const [counter, setCounter] = useState(0);
    // const arr = useState(0)
    // const state = arr[0]
    // const setState = arr[1];

    // const [stateArray, setStateArray] = useState([1,2,3,4,5]);

    // const [user, setUser] = useState({
    //     firstName: 'Yariv',
    //     lastName: 'Katz'
    // })


    const [todo, setTodo] = useState([])


    // componentDidMount + componentDidUpdate
    useEffect(() => {
        // fetch(...)

        todoService.getTodos().then((todos) => {
            setTodo(todos);
        });

    }, []);


    // () => {
    //     .... 
    // }

    /**
     * () => 10
     */

     /**
      * message => message.length
      */

    // [{title: ...}] => [<TodoItem />]
    return (
        <ul className="list-group">
        
            {
                todo.map((todoItem) => {
                    return <TodoItem item={todoItem} key={todoItem.id} />
                })
            }
        </ul>        
    )
}
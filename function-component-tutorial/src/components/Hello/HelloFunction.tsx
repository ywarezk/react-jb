/**
 * component that displays hello world
 */

import React, { useState } from 'react';

// export default () => {...}

interface IHelloProps {
    message: string;
}

const Hello: React.FC<IHelloProps> = (props) => {

    // useState({
    //     isVisble: true,
    //     isVisibleAlexandra: true
    //     message: '',
    //     firstName: 'yariv'
    //     lastName: 'katz'
    // });

    const [isVisibleAlexandra, setIsVisibleAlexandra] = useState(true);
    // const isVisible = isVisibleArray[0];
    // const setIsVisible = isVisibleArray[1];

    // [isVisible, setIsVisible]
    // if (...) {useState()}
    const isVisibleArray = useState(true);
    const isVisible = isVisibleArray[0];
    const setIsVisible = isVisibleArray[1];



    // [message, setMessage]
    const [message, setMessage] = useState('');

    // [user, setUser]
    const [user, setUser] = useState({
        firstName: 'Yariv',
        lastName: 'Katz'
    })

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
            {isVisible && <h1>Hello world from function component {props.message}</h1>}
            <button onClick={toggleVisibility}>Toggle Visibility</button>
        </>
    )

}

export default Hello;
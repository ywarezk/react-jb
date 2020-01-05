/**
 * countdown to zero and then destroy with function component
 */

import React, { useState, useEffect } from 'react';

interface ICountdownProps {
    destroyCb: () => void
}

const CountdownFunction: React.FC<ICountdownProps> = ({ destroyCb }) => {
    // const destroyCb = props.destroyCb

    const [counter, setCounter] = useState(3);
    console.log(counter);

    // [counter, anotherVariable] => only if counter or anothervariable changed
    // [counter] => will run only if counter is changed
    // [] => componentDidMount
    // componentDidMount + componentDidUpdate
    useEffect(() => {
        if (counter === 0) {
            destroyCb();
            return
        }

        console.log('this is called once');
        setTimeout(() => {
            console.log(`this is called every set interval ${counter}`);
            setCounter(counter - 1);
        }, 1000);
    }, [counter])

    useEffect(() => {

    })

    return (
        <h1>{counter}</h1>
    )

}

export default CountdownFunction;
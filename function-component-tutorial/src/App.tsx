import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello';
import HelloFunction from './components/Hello/HelloFunction';
import Countdown from './components/Countdown/Countdown';
import { render } from '@testing-library/react';

// class App ... {
//     destroyCb = () => {
//         this.setState({isVisible: false})
//     }

//     render() { ... <Countdown destroyCb={this.destroyCb} />}
// }

const App: React.FC = () => {

    // {isVisible: true}
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div className="App">
            <h1>Hello</h1>
            <HelloFunction message="message from parent" />

            <Hello message={'hello from parent'} />

            <h1>Countdown</h1>

            {
                isVisible && <Countdown destroyCb={() => setIsVisible(false)} />
            }

        </div>
    );
}

export default App;

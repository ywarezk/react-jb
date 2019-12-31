import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello/Hello';
import HelloFunction from './components/Hello/HelloFunction';

const App: React.FC = () => {
    return (
        <div className="App">
            <HelloFunction />

            <Hello />
        </div>
    );
}

export default App;

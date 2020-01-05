import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import LoginFuncAlexandra from './components/Login/LoginFunc';
import LoginControlled from './components/Login/LoginControlled';
import LoginControlledFunc from './components/Login/LoginControlledFunc';

function App() {
  return (
    <div className="App">

      <h1>Uncontrolled</h1>

      <h2>Class</h2>
      <Login /> <br/>

      <h2>Function</h2>
      <LoginFuncAlexandra />

      <h1>
        Controlled
      </h1>

      <h2>Class</h2>
      <LoginControlled />

      <h2>Function</h2>

      <LoginControlledFunc />
    </div>
  );
}

export default App;

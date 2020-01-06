import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import LoginFuncAlexandra from './components/Login/LoginFunc';
import LoginControlledMati from './components/Login/LoginControlled';
import LoginControlledFunc from './components/Login/LoginControlledFunc';
import LoginFormik from './components/Login/LoginFormik';

function App() {
  return (
    <div className="App">

      <h1>Uncontrolled</h1>

      <h2>Class</h2>
      <Login /> <br/>

      <h2>Function</h2>
      <LoginFuncAlexandra  />

      <h1>
        Controlled
      </h1>

      <h2>Class</h2>
      <LoginControlledMati title="hello world" />

      <h2>Function</h2>

      <LoginControlledFunc />

      <h2>Formik</h2>

      <LoginFormik />
    </div>
  );
}

export default App;

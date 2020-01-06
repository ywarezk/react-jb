import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Todo from './components/Todo/Todo';
import {JWTProvider} from './contexts/jwt.context';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      
      <JWTProvider value={ {token, setToken} }>
        
        <Login />

        <Todo />
      </JWTProvider>
      
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Send from './components/Send/Send';
import Recieve from './components/Recieve/Recieve';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div className="App">

      <Provider store={store} >

        <Send />

        <Recieve />

      </Provider>

      
    </div>
  );
}

export default App;

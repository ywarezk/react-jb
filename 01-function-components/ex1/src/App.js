import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
   <div className="container">
     <div className="row justify-content-center">

      <div className="col-6">

        <h1>Todo list</h1>

        <TodoList />

      </div>

     </div>
   </div>
  );
}

export default App;

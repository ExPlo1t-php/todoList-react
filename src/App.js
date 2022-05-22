import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import './assets/fontawesome-free-6.0.0-beta2-web/css/all.css'

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
    </div>
  );
}

export default App;

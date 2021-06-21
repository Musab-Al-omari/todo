import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo2 from './components/todo/todo-connected';

import Header from './components/body/header.js';
import './app.scss'

function App() {

  return (
    <>
      <Header />
      <ToDo2 />
    </>
  );
}


export default App;
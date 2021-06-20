import React from 'react';

import ToDo from './components/todo/todo.js';
import Header from './components/body/header.js';
import './app.scss'

function App() {

  return (
    <>
      <Header />
      <ToDo />
    </>
  );
}


export default App;
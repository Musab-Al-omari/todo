import React from 'react';

// import ToDo from './components/todo/todo.js';
import ToDo2 from './components/todo/todo-connected';
import Header from './components/body/header.js';
import './app.scss'
// import MyContextProvider from './context/context.js'

function App() {

  return (
    
    // <MyContextProvider>
      <>
      <Header />
      <ToDo2 />
      </>
    // </MyContextProvider>
    
  );
}


export default App;
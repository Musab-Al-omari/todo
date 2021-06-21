import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { useState, useEffect } from 'react';
import './todo.scss';


function ToDo(props) {

  const [list, setList] = useState([])

  useEffect(() => {
    let newList = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];
    setList(newList);
  }, []);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };


  const toggleComplete = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(newList);
    }
  };



  // will run every time the list change 
  useEffect(() => {
    let item = list.filter(item => !item.complete).length

    // will change the title name 
    window.document.title = `to Do ${item}/${list.length}`
  }, [list])

  const deleteItem = (id) => {
    let newList = list.filter(line => {
      if (line._id === id) {
        return false
      }
      return true
    });


    setList(newList);
  };

  const editItem = (item) => {
    let newList = list.map(obj => {
      if (obj._id === item._id) {
       obj=item
      }
      return obj
    });
    setList(newList);
  }


  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            delete={deleteItem}
            // edit={editItem}
            handlerPopSubmit={editItem}
          />
        </div>
      </section>
    </>
  );
}



export default ToDo;

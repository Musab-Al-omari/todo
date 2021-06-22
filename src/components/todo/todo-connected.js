import React, { useEffect, useState } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Pagination from './Pagination.js'
import './todo.scss';
import SelectD from '../select.js';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';


const ToDo = () => {

  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  // const []


  const paginate = pageNumber => setCurrentPage(pageNumber);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentList = list.slice(indexOfFirstPost, indexOfLastPost);


  const _addItem = (item) => {
    item.due = new Date();
    fetch(todoAPI, {
      method: 'post',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(savedItem => {
        console.log('savedItem', savedItem);
        setList([...list, savedItem])
      })
      .catch(console.error);
  };

  const _toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  };

  const _getTodoItems = () => {

    fetch(todoAPI, {
      method: 'get',
      mode: 'cors',
    })
      .then(data => data.json())
      .then(data => setList(data.results))
      .catch(console.error);
  };

  useEffect(_getTodoItems, []);

  // will run every time the list change 
  useEffect(() => {
    let item = list.filter(item => !item.complete).length

    // will change the title name 
    window.document.title = `to Do ${item}/${list.length}`
  }, [list])

  const deleteItem = (id) => {

    let item1 = list.filter(line => {
      if (line._id === id) {
        return false
      }
      return true
    });

    let item = list.filter(i => i._id === id)[0] || {};


    if (item._id) {

      item.complete = !item.complete;
      console.log('hi', item.complete);
      let url = `${todoAPI}/${id}`;
      fetch(url, {
        method: 'delete',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          console.log(savedItem);
          // setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }











    setList(item1);
  };

  const editItem = (item) => {
    // console.log('editItem',editItem);

    // let item = list.filter(i => i._id === editItem._id)[0] || {};
    // console.log('item',item);
    
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${item._id}`;
      fetch(url, {
        method: 'put',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
      })
        .then(response => response.json())
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    }
  }
  const sortByDifficulty=(diff)=>{
    // console.log(currentList);
    // console.log(diff);
    currentList.sort(obj=>{
      return obj.difficulty>diff
    })
    // console.log(currentList);

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
          <TodoForm handleSubmit={_addItem} />
          <SelectD handleDifficulty={sortByDifficulty}/>
        </div>
        <div>
          <TodoList
            list={currentList}
            handleComplete={_toggleComplete}
            delete={deleteItem}
            handlerPopSubmit={editItem}
          />
        </div>
      </section>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={list.length}
        paginate={paginate}
      />
    </>


  );
};

export default ToDo;

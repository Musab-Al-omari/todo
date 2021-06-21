import React from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { useState } from 'react';




function TodoList(props) {

  const [show, setShow] = useState(false);
  let [item, setItem] = useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleEdit = (oneItem) => {
    handleShow();
    setItem(oneItem)
  }


  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value })
  };
  // console.log(item);

  const handlerPopSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    handleClose();
    // console.log(item);
    props.handlerPopSubmit(item);
    // setItem(item);
  };


  return (
    <>
      <ul>
        {props.list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
            {/* <button onClick={() => props.editItem(item._id)}>EDIT</button> */}
            <button onClick={() => props.delete(item._id)}>delete</button>

            <Button variant="primary" onClick={() => {
              handleEdit(item)
            }}>
              edit
            </Button>

          </li>
        ))}
      </ul>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* */}
          <Form onSubmit={handlerPopSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control name="text" value={item.text} placeholder="Add To Do List Item" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control defaultValue={item.difficulty} min="1" max="5" type="Range" name="difficulty" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control type="text" name="assignee" value={item.assignee} placeholder="Assigned To" onChange={handleInputChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Item
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>

  );
}






export default TodoList;

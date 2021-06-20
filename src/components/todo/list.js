import React from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react';




function TodoList(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let [item, setItem] = useState({});



  const handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value })
  };

  const handlerPopSubmit = (e) => {
    e.preventDefault();
    e.target.reset();

    props.handlerPopSubmit(item);
    setItem(item);
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

            <Button variant="primary" onClick={handleShow}>
              edit
            </Button>

          </li>
        ))}
      </ul>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* */}
          <Form  onSubmit={handlerPopSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control name="text" placeholder="Add To Do List Item" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Difficulty Rating</Form.Label>
              <Form.Control defaultValue="1" min="1" max="5" type="Range" name="difficulty"  onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange}  />
            </Form.Group>

            <Button variant="primary"  type="submit" onClick={handleClose}>
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

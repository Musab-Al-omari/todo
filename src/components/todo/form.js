import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useForm from '../hooks/form.js'


function TodoForm(props) {

  function callback(myValue) {
    console.log('myValues',myValue);
    props.handleSubmit(myValue);
  }
  const [handleSubmit, handleChange] = useForm(callback)


  return (
    <>
      <h3>Add Item</h3>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>To Do Item</Form.Label>
          <Form.Control name="text" placeholder="Add To Do List Item" onChange={handleChange} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" min="1" max="5" type="Range" name="difficulty" onChange={handleChange} />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control type="text" name="assignee" placeholder="Assigned To" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" size="lg" type="submit">
          Add Item
        </Button>


      </Form>
    </>
  );
}



export default TodoForm;

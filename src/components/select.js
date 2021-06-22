import React from 'react'

import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function SelectD(props) {


    const [values, setValues] = useState(0);

    const handleChange = (e) => {
        console.log(e.target.value);

        setValues(e.target.value)
        console.log(values);

        props.handleDifficulty(values)

    }

    return (
        <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>defeclty select</Form.Label>
            <Form.Control as="select" onChange={handleChange}>
                <option >1</option>
                <option >2</option>
                <option >3</option>
                <option >4</option>
                <option >5</option>
            </Form.Control>
        </Form.Group>
    )
}

export default SelectD;



import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import './header.scss'
import React from 'react'





 export default function header(props) {

    return(
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
     
           <img
              alt=""
              src="./ggggg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
        </>
    )
    
}
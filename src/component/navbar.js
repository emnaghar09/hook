import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'; 
import {Link} from 'react-router-dom'

//import './navbar.css';
function navbar() {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Container className='navbar'>



    <Navbar.Brand href="#home">MOVIES THEATER</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/MovieList'>Movie List</Nav.Link>
   
  
      </Nav>
    </Navbar.Collapse>

  
    
  </Container>
</Navbar> 
        </div>
    )
}

export default navbar

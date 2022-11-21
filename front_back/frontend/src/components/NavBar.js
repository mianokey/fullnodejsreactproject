import React from 'react';
import './components_css/navlink.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){

return(
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">THE API</Navbar.Brand>
          <Nav className="me-auto">
             <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/showallusers">Users</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      
    </>
    
)

    
}

export default NavBar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className="bg-dark text-light">
      <Container>
        <Navbar.Brand href="#home"style={{color:"whitesmoke"}} >Budjet Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <p style={{color:"wheat"}}> Signed in as:</p> <a href="#login" className="text-light">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

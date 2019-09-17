import React, { Component } from 'react';
import  {Navbar, Nav, FormGroup} from 'react-bootstrap'


class Menu extends Component{
    render(){
        return (
            <div className="App">
            <header className="App-header">
                Hello
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link> |
                            <Nav.Link href="#link">About</Nav.Link>  |
                            <Nav.Link href="#contact">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            </div>
        );
    }
}

export default Menu;

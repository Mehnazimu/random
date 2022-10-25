import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar bg="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img
                                src="https://www.nextgenscience.org/sites/all/themes/ngss/img/accordion_logo.png"
                                width="40"
                                height="40"
                                className="d-inline-block align-top rounded"
                                alt=""
                            />
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <Navbar.Brand href="#home">Unique Learner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/courses'>Courses</Nav.Link>
                        <Nav.Link href='/blog'>Blog</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href='/login'>Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
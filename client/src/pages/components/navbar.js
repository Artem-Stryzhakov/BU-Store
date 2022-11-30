import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {LoginModal, RegistrationModal} from '../AuthModals'

export const NavScrollExample = () => {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Buy and sell</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <div>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/features">Features</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                    <Form className="d-flex" id={'searchForm'}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                    <div id={'authButtons'}>
                        <Button variant={"outline-success"} onClick={() => setModalShow1(true)}>Log in</Button>
                        <LoginModal
                            show={modalShow1}
                            onHide={() => setModalShow1(false)}
                        />
                        <Button variant={"outline-success"} onClick={() => setModalShow2(true)}>Sign in</Button>
                        <RegistrationModal
                            show={modalShow2}
                            onHide={() => setModalShow2(false)}
                        />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
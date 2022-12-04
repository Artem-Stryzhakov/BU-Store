import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {LoginModal, RegistrationModal} from '../AuthModals'

export const NavScrollExample = () => {
    const [modalLoginShow, setModalLoginShow] = React.useState(false);
    const [modalRegisterShow, setModalRegisterShow] = React.useState(false);

    const isAuth = true;
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                    src="https://cdn-icons-png.flaticon.com/512/3081/3081415.png"
                    alt="..."
                    width={'45px'}
                    id={'mainLogo'}/>
                </Navbar.Brand>
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
                        {isAuth ? (
                            <>
                                <Button variant={"outline-success"} onClick={() => setModalLoginShow(true)}>Log in</Button>
                                <LoginModal
                                    show={modalLoginShow}
                                    onHide={() => setModalLoginShow(false)}
                                />
                                <Button variant={"success"} onClick={() => setModalRegisterShow(true)}>Sign in</Button>
                                <RegistrationModal
                                    show={modalRegisterShow}
                                    onHide={() => setModalRegisterShow(false)}
                                />
                            </>
                            ) : (
                            <>
                                <Button variant={"danger"} >Log out</Button>
                            </>
                            )
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
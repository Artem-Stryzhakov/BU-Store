import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAuth} from "../../redux/slices/auth";

export const NavScrollExample = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth);

    const onClickLogout = () => {
        if (window.confirm('Are you sure you want to log?')) {
            dispatch(logout())
            window.localStorage.removeItem('token')
        }
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="https://www.okidoki.ee/" target={'_blank'}>
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
                        </Nav>
                    </div>
                    <div id={'authButtons'}>
                        {isAuth ? (
                            <>
                                <div>
                                    {/*<Link to={'/addProduct'}>
                                        <Button variant={"outline-primary"} style={{marginRight: '100px'}}>Add Product</Button>
                                    </Link>*/}
                                    <Button variant={"danger"} onClick={onClickLogout}>Log out</Button>
                                </div>

                            </>
                            ) : (
                            <>
                                <Link to={'/auth/login'}>
                                <Button variant={"outline-success"} style={{marginRight: '90px'}}>Log in</Button>
                                </Link>

                                <Link to={'/auth/register'}>
                                    <Button variant={"success"}>Sign in</Button>
                                </Link>
                            </>
                            )
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
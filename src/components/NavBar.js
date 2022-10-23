import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Email-Password-Auth
            </Navbar.Brand>
            
            </Container>
            <NavLink className='mx-2' to='/'>Register</NavLink>
            <NavLink className='mx-2' to='/login'>Login</NavLink>
        </Navbar>
        </div>
    );
};

export default NavBar;
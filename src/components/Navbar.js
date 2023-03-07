import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavbarComp = (props) => {
    return (
        <Navbar display="flex"  bg="secondary" variant="dark" expand="sm" className="pb-4">
        <Container>
            <Navbar.Brand><b>Niklas Hagelin</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/cv">Cv</Nav.Link>
                    <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link as={NavLink} to="contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}
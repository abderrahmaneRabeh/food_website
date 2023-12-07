import React from 'react'
import './navbar.css'
import {Container , Navbar, Nav } from 'react-bootstrap'
export default function NavbarApp() {
  return (
    <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home"><img src='logo.png' className='imgLogo'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto marNav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About us</Nav.Link>
          <Nav.Link href="#link">Reviews</Nav.Link>
          <Nav.Link href="#link">Explore Food</Nav.Link>
          <Nav.Link href="#link">FaQ</Nav.Link>
        </Nav>
        <Nav.Link id='lastel'>
           06.22.15.33.68
        </Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const MyNavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Pokemon TCG</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Router>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/set">Sets</Nav.Link>
          </Router>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavBar

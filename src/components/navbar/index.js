import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { GiCardBurn } from 'react-icons/gi'
import { GoMail } from 'react-icons/go'
import { SiOpslevel } from 'react-icons/si'

const MyLink = (props) => {
  const { to, icon, title } = props
  return (
    <Link
      className="d-flex align-items-center mx-3 text-secondary text-decoration-none"
      to={to}
    >
      {icon}
      {title}
    </Link>
  )
}
MyLink.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.node
}

const MyNavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>
            <img src="/images/logo3.png" alt="logo" style={{ width: '50px' }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="col-11">
            <MyLink
              to={'/set'}
              icon={<GiCardBurn className="me-1" />}
              title="Sets"
            />
            <MyLink
              to={'/set'}
              icon={<SiOpslevel className="me-1" />}
              title="Advanced"
            />
          </Nav>
          <MyLink
            to={'/set'}
            icon={<GoMail className="me-1" />}
            title="Contact"
          />
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default MyNavBar

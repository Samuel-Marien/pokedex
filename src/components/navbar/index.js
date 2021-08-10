import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import SwitchButton from '../themeSwitch'

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

const MyNavBar = (props) => {
  const { children } = props

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
          <Nav className="col-9 mt-4 mt-md-0">
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
            {children}
          </Nav>
          <Nav className="col d-flex justify-content-end">
            <SwitchButton />
            <MyLink
              to={'/set'}
              icon={<GoMail className="me-1" />}
              title="Contact"
            />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

MyNavBar.propTypes = {
  children: PropTypes.node
}

export default MyNavBar

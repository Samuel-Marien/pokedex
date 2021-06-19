import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { CgPokemon } from 'react-icons/cg'
import { GiCardBurn, GiMoon } from 'react-icons/gi'
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
  icon: PropTypes.elementType
}

const MyNavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-5 shadow">
      <Link to="/" className="text-decoration-none">
        <Navbar.Brand>
          <CgPokemon size={50} className="m-0 p-0" color="#ffc107" /> TCG DB
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="col-10">
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
        <GiMoon className="ms-5" color="#343a40" role="button" />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavBar

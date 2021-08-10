/* eslint-disable space-before-function-paren */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Context from '../context'

import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

import { GiCardPick } from 'react-icons/gi'

let userWord = ''
const handleChange = (e) => {
  userWord = e.target.value
}

const handleSubmit = (e) => {
  e.preventDefault()
}

const MyLocalInput = (props) => {
  const { children } = props
  return (
    <Row className="col-12 col-md-8 mt-3">
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            aria-describedby="basic-addon1"
            onChange={handleChange}
            placeholder="Search for a card..."
          />
          {children}
        </InputGroup>
      </Form>
    </Row>
  )
}

MyLocalInput.propTypes = {
  children: PropTypes.node
}

const SearchCard = () => {
  const { setUserValue } = useContext(Context)

  const handleClick = () => {
    setUserValue(userWord)
  }

  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center">
        <h1>Pokemon TCG</h1>
        <h5 className="text-center">The Ultimate Pokémon Card Database</h5>
        <MyLocalInput>
          <Link to="/cards">
            <Button
              className="p-1"
              variant="outline-warning"
              type="submit"
              onClick={handleClick}
            >
              <GiCardPick size={35} />
            </Button>
          </Link>
        </MyLocalInput>
      </div>
    </div>
  )
}

export default SearchCard

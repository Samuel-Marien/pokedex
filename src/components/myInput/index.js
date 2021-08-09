/* eslint-disable space-before-function-paren */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

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

const MyInput = () => {
  const { setUserValue } = useContext(Context)

  const handleClick = () => {
    setUserValue(userWord)
  }

  return (
    <div>
      <Row className="col-12">
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <FormControl
              aria-describedby="basic-addon1"
              onChange={handleChange}
              placeholder="Search for a card..."
              size="sm"
              style={{ height: '30px' }}
            />
            <Link to="/cards">
              <Button
                className="p-0 m-0"
                variant="outline-warning"
                type="submit"
                onClick={handleClick}
                style={{ height: '30px' }}
              >
                <GiCardPick size={25} />
              </Button>
            </Link>
          </InputGroup>
        </Form>
      </Row>
    </div>
  )
}

export default MyInput

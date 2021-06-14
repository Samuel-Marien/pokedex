/* eslint-disable space-before-function-paren */
import React from 'react'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

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

const getCardByName = async (name) => {
  pokemon.card.where({ q: `name:${name}*` }).then((result) => {
    console.log(result.data)
  })
}

const MyInput = () => {
  return (
    <Row className="col-8 mt-3">
      <Form onSubmit={handleSubmit} className="">
        <InputGroup className="">
          <FormControl
            aria-describedby="basic-addon1"
            onChange={handleChange}
            placeholder="Search by name ..."
          />

          <Button
            className="p-1"
            variant="outline-info"
            type="submit"
            onClick={() => getCardByName(userWord)}
          >
            <GiCardPick size={35} />
          </Button>
        </InputGroup>
      </Form>
    </Row>
  )
}

const SearchCard = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column align-items-center">
        <h1>Pokemon TCG</h1>
        <h5>The Ultimate Pokémon Card Database</h5>
        <MyInput />
      </div>
    </div>
  )
}

export default SearchCard

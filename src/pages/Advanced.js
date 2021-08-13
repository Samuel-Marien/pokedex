import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MyNavBar from '../components/navbar'
import MyInput from '../components/myInput'
import { subtypeArray } from '../components/helper/index'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Fade from 'react-bootstrap/Fade'

let array = []

const Advanced = () => {
  const [supertype, setSupertype] = useState('')
  const [subtype, setSubtype] = useState([])

  const handleSuperType = (e) => {
    e.preventDefault()
    setSupertype(e.target.id)
  }

  const handleSubType = (e) => {
    e.preventDefault()
    array.push(e.target.id)
    setSubtype([...array])
  }
  console.log(subtype)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit!')

    // Filter cards via query parameters
    pokemon.card
      // .all({ q: 'set.name:generations subtypes:EX subtypes:mega' })
      // .all({ q: 'supertype:Pokémon subtypes:EX subtypes:mega' })
      // .all({ q: 'subtypes:V' })

      .all({
        q: `${supertype ? `supertype:${supertype}` : ''} ${subtype
          .map((elem) => {
            return `subtypes:${elem}`
          })
          .join(' ')}`
      })
      .then((result) => {
        console.log(result)
      })
  }

  const handleReset = () => {
    setSubtype(() => (array = []))
    setSupertype(null)
  }

  const SubtypeButton = (props) => {
    const { name } = props
    return (
      <Button
        size="sm"
        type="button"
        className=" me-2 mt-2"
        variant="outline-secondary"
        onClick={handleSubType}
        id={name}
      >
        {name}
      </Button>
    )
  }

  SubtypeButton.propTypes = {
    name: PropTypes.string
  }

  function Example(props) {
    const { children } = props
    const [open, setOpen] = useState(true)

    return (
      <div className="mt-4 pt-4 border-top border-secondary">
        <div className="d-flex justify-content-between">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            size="sm"
          >
            See your choices
          </Button>
          <Button type="submit" onClick={handleSubmit} variant="outline-info">
            Search
          </Button>
        </div>

        <Fade in={open}>{children}</Fade>
      </div>
    )
  }

  Example.propTypes = {
    children: PropTypes.node
  }

  return (
    <div>
      <MyNavBar />
      <div className="container col-11 col-md-6">
        {/* search by name  */}
        <div className="mt-4">
          <p>Search by name</p>
          <div className="">
            <MyInput />
          </div>
        </div>

        {/* search by superType  */}
        <div className="mt-4 pt-4 d-flex flex-column flex-md-row border-top border-secondary">
          <p className="me-5">Supertype</p>
          <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
              <Button
                onClick={handleSuperType}
                className="me-3 me-md-5"
                variant="outline-warning"
                id="Energy"
              >
                Energy
              </Button>
              <Button
                onClick={handleSuperType}
                className="me-3 me-md-5"
                variant="outline-info"
                id="Pokémon"
              >
                Pokemon
              </Button>
              <Button
                onClick={handleSuperType}
                variant="outline-secondary"
                id="Trainer"
              >
                Trainer
              </Button>
            </ButtonToolbar>
          </div>
        </div>

        {/* search by Subtypes  */}
        <div className="mt-4 pt-4 d-flex flex-column flex-md-row  border-top border-secondary">
          <p className="p-0 m-0 me-5">Subtypes</p>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            {subtypeArray.map((elem, index) => {
              return <SubtypeButton key={index} name={elem} />
            })}
          </div>
        </div>
        <Example>
          <div className="bg-light mt-4 pt-3 border-top border-secondary">
            <p className="text-center m-0 p-0">Your choice(s) :</p>
            <div>
              <p className="m-0 p-0">supertype : {supertype}</p>
              <p className="m-0 p-0">
                subtype :{' '}
                {subtype.map((elem, index) => {
                  return (
                    <span key={index} className="me-2">
                      {elem}
                    </span>
                  )
                })}
              </p>
              <div className="mt-4 d-flex justify-content-between">
                <Button
                  type="submit"
                  onClick={handleReset}
                  variant="outline-info"
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  variant="outline-info"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </Example>
      </div>
    </div>
  )
}

export default Advanced

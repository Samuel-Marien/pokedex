import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import MyNavBar from '../components/navbar'
import MyInput from '../components/myInput'
import stringToIcon from '../misc/stringToIcon'
import subtypeArray from '../misc/subtypeArray'
import typesArray from '../misc/typeArray'
import Context from '../components/context'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Fade from 'react-bootstrap/Fade'
import Form from 'react-bootstrap/Form'

let array = []

const Advanced = () => {
  const [supertype, setSupertype] = useState('')
  const [subtype, setSubtype] = useState([])
  const [type, setType] = useState('')
  const { setAdvancedData } = useContext(Context)
  // const [selected, setSelected] = useState(false)

  const handleSuperType = (e) => {
    e.preventDefault()
    setSupertype(e.target.id)
  }

  const handleSubType = (e) => {
    e.preventDefault()
    array.push(e.target.id)
    setSubtype([...array])
  }

  const handleType = (e) => {
    setType(e.currentTarget.id)
  }

  const handleReset = () => {
    setSubtype(() => (array = []))
    setSupertype(null)
    setAdvancedData(() => [])
    setType(null)
  }

  // clear data on load
  useEffect(() => {
    handleReset()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Filter cards via query parameters
    pokemon.card
      .all({
        q: `${supertype ? `supertype:${supertype}` : ''} 
        ${subtype
          .map((elem) => {
            return `subtypes:${elem}`
          })
          .join(' ')} ${type ? `types:${type}` : ''}`
      })
      .then((result) => {
        setAdvancedData(result)
      })
  }

  const SubtypeButton = (props) => {
    const { name, id } = props
    return (
      <Button
        size="sm"
        type="button"
        className=" me-2 mt-2"
        variant="outline-secondary"
        onClick={handleSubType}
        id={id}
      >
        {name}
      </Button>
    )
  }
  SubtypeButton.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.string
  }

  const ChoicesBoard = (props) => {
    const { children } = props
    const [open, setOpen] = useState(true)

    return (
      <div className="mt-4 pt-4 border-top border-secondary">
        <div className="d-flex justify-content-between">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="choices-collapse-text"
            aria-expanded={open}
            size="sm"
          >
            {open ? 'Hide your choices' : 'See your choices'}
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            variant="outline-info"
            className="m-0 p-0"
          >
            <Link to="advanced-details" className="p-3">
              Search
            </Link>
          </Button>
        </div>
        <Fade in={open}>{children}</Fade>
      </div>
    )
  }
  ChoicesBoard.propTypes = {
    children: PropTypes.node
  }

  const SearchBlock = (props) => {
    const { name, children, text } = props

    return (
      <div className="mt-4 pt-4 d-flex flex-column flex-md-row justify-content-start border-top border-secondary">
        <p className="col-2">{name}</p>
        <div>
          {children}
          <p className="fw-light p-0 m-0 mt-3" style={{ fontSize: '.8rem' }}>
            {text}
          </p>
        </div>
      </div>
    )
  }
  SearchBlock.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.node
  }

  return (
    <div style={{ height: '100%' }}>
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
        <SearchBlock name="Supertype" text="Click to select Supertype.">
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
        </SearchBlock>

        {/* search by Subtypes  */}
        <SearchBlock
          name="Subtypes"
          text="Click to select multiple subtypes. Selecting Stage 1 and Stage 2 will filter on cards that are Stage 1 OR Stage 2."
        >
          {subtypeArray.map((elem, index) => {
            return <SubtypeButton key={index} name={elem.name} id={elem.id} />
          })}
        </SearchBlock>

        {/* search by type  */}
        <SearchBlock name="type" text="Selecting Type.">
          <Form className="d-flex flex-wrap">
            {typesArray.map((item, index) => {
              return (
                <div key={index} className="d-flex col-2 mt-2" id={item}>
                  <Form.Check
                    type="checkbox"
                    id={item}
                    name={item}
                    onClick={handleType}
                  />
                  <img src={`/images/${item}.png`} style={{ width: '25px' }} />
                </div>
              )
            })}
          </Form>
        </SearchBlock>

        <ChoicesBoard>
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
              {type ? <p>type: {stringToIcon(type)}</p> : ''}
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
                  className="m-0 p-0"
                >
                  <Link to="advanced-details" className="p-3">
                    Search
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ChoicesBoard>
      </div>
    </div>
  )
}

export default Advanced

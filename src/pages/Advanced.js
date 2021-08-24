import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import MyNavBar from '../components/navbar'
import MyInput from '../components/myInput'
import stringToIcon from '../misc/stringToIcon'
import subtypeArray from '../misc/subtypeArray'
import typesArray from '../misc/typeArray'
import setsArray from '../misc/setArray'
import seriesArray from '../misc/seriesArray'
import rarityArray from '../misc/rarityArray'

import Context from '../components/context'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Fade from 'react-bootstrap/Fade'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import ListGroup from 'react-bootstrap/ListGroup'

let array = []
const lowHpArray = [30, 40, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180]
const highHpArray = [100, 120, 140, 160, 180, 200, 220, 240, 280, 320, 350, 400]
const retreatArray = [1, 2, 3, 4, 5, 6]

const Advanced = () => {
  const [supertype, setSupertype] = useState('')
  const [subtype, setSubtype] = useState([])
  const [type, setType] = useState('')
  const [weaknesses, setWeaknesses] = useState('')
  const [resistances, setResistances] = useState('')
  const [lowHp, setLowHp] = useState(10)
  const [highHp, setHighHp] = useState(500)
  const [lowRetreat, setLowRetreat] = useState(0)
  const [highRetreat, setHighRetreat] = useState(6)
  const [collection, setCollection] = useState('')
  const [serie, setSerie] = useState('')
  const [rarity, setRarity] = useState('')
  const { setAdvancedData } = useContext(Context)

  const handleSuperType = (e) => {
    e.preventDefault()
    setSupertype(e.target.id)
  }

  const handleSubType = (e) => {
    e.preventDefault()
    array.push(e.target.id)
    setSubtype([...array])
  }

  const handleWeaknesses = (e) => {
    setWeaknesses(e.currentTarget.id)
  }

  const handleResistances = (e) => {
    setResistances(e.currentTarget.id)
  }

  const handleLowHp = (e) => {
    setLowHp(e.currentTarget.id)
  }

  const handleHighHp = (e) => {
    setHighHp(e.currentTarget.id)
  }

  const handleLowRetreat = (e) => {
    setLowRetreat(e.currentTarget.id)
  }

  const handleHighRetreat = (e) => {
    setHighRetreat(e.currentTarget.id)
  }

  const handleSets = (e) => {
    e.preventDefault()
    setCollection(e.target.id)
  }

  const handleSerie = (e) => {
    e.preventDefault()
    setSerie(e.target.id)
  }

  const handleRarity = (e) => {
    e.preventDefault()
    setRarity(e.target.id)
  }
  console.log(rarity)

  const handleReset = () => {
    setSubtype(() => (array = []))
    setSupertype(null)
    setAdvancedData(() => [])
    setType(null)
    setWeaknesses(null)
    setResistances(null)
    setLowHp(10)
    setHighHp(500)
    setLowRetreat(0)
    setHighRetreat(6)
    setCollection(null)
    setSerie(null)
    setRarity(null)
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
          .join(' ')} 
          ${type ? `types:${type}` : ''} 
          ${weaknesses ? ` weaknesses.type:${weaknesses}` : ''} 
          ${resistances ? ` resistances.type:${resistances}` : ''} 
          ${lowHp || highHp ? ` hp:[${lowHp} TO ${highHp}]` : ''}${
          lowRetreat || highRetreat
            ? ` convertedRetreatCost:[${lowRetreat} TO ${highRetreat}]`
            : ''
        } 
          ${collection ? ` !set.id:${collection}` : ''} 
          ${serie ? ` set.series:${serie}` : ''}
          ${rarity ? `rarity:${rarity}` : ''}
          `
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
          <Button type="submit" onClick={handleReset} variant="outline-danger">
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
        <p className="col-3">{name}</p>
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

  const MyDropItem = (props) => {
    const { id, func } = props
    return (
      <Dropdown.Item onClick={func} id={id}>
        {id}
      </Dropdown.Item>
    )
  }
  MyDropItem.propTypes = {
    id: PropTypes.number,
    func: PropTypes.func
  }

  const MyListItem = (props) => {
    const { title, id, func } = props
    return (
      <ListGroup.Item action onClick={func} id={id}>
        {title}
      </ListGroup.Item>
    )
  }
  MyListItem.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    func: PropTypes.func
  }

  const LegalityDropDown = (props) => {
    const { name, funcLegal, funcBanned } = props
    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="myDropdown"
          className="col-12 mt-2"
        >
          {name}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={funcLegal} id="legal">
            Legal
          </Dropdown.Item>
          <Dropdown.Item onClick={funcBanned} id="banned">
            Banned
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
  LegalityDropDown.propTypes = {
    name: PropTypes.string,
    funcLegal: PropTypes.func,
    funcBanned: PropTypes.func
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
              variant="outline-secondary"
              id="Energy"
            >
              Energy
            </Button>
            <Button
              onClick={handleSuperType}
              className="me-3 me-md-5"
              variant="outline-secondary"
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
        <SearchBlock name="Type" text="Click to select Type.">
          <div className="d-flex flex-wrap">
            {typesArray.map((item, index) => {
              return (
                <div key={index} className="d-flex me-3 mt-2" id={item}>
                  <img
                    src={`/images/${item}.png`}
                    style={{ width: '25px' }}
                    onClick={(e) => setType(e.currentTarget.id)}
                    role="button"
                    id={item}
                  />
                </div>
              )
            })}
          </div>
        </SearchBlock>

        {/* search by Weaknesses  */}
        <SearchBlock name="Weaknesses" text="Click to select Weaknesses.">
          <div className="d-flex flex-wrap">
            {typesArray.map((item, index) => {
              return (
                <div key={index} className="d-flex me-3 mt-2" id={item}>
                  <img
                    src={`/images/${item}.png`}
                    style={{ width: '25px' }}
                    onClick={handleWeaknesses}
                    role="button"
                    id={item}
                  />
                </div>
              )
            })}
          </div>
        </SearchBlock>

        {/* search by Resistances  */}
        <SearchBlock name="Resistances" text="Click to select Resistances.">
          <div className="d-flex flex-wrap">
            {typesArray.map((item, index) => {
              return (
                <div key={index} className="d-flex me-3 mt-2" id={item}>
                  <img
                    src={`/images/${item}.png`}
                    style={{ width: '25px' }}
                    onClick={handleResistances}
                    role="button"
                    id={item}
                  />
                </div>
              )
            })}
          </div>
        </SearchBlock>

        {/* search by hp range  */}
        <SearchBlock
          name="HP"
          text="Enter a range. Leave the input blank to treat it as a wildcard. For example, setting the low end to 200 would mean anything greater than or equal to 200."
        >
          <InputGroup>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary px-5"
                id="dropdown-basic"
              >
                Low end
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {lowHpArray.map((item, index) => {
                  return <MyDropItem key={index} id={item} func={handleLowHp} />
                })}
              </Dropdown.Menu>
            </Dropdown>
            <InputGroup.Text>TO</InputGroup.Text>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary px-5"
                id="dropdown-basic"
              >
                High end
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {highHpArray.map((item, index) => {
                  return (
                    <MyDropItem key={index} id={item} func={handleHighHp} />
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
        </SearchBlock>

        {/* search by retreat cost range  */}
        <SearchBlock
          name="Converted Retreat Cost"
          text="Enter a range. Leave the input blank to treat it as a wildcard. For example, a high end of 3 would mean a maximum of 3."
        >
          <InputGroup>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary px-5"
                id="dropdown-basic"
              >
                Low end
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {retreatArray.map((item, index) => {
                  return (
                    <MyDropItem key={index} id={item} func={handleLowRetreat} />
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
            <InputGroup.Text>TO</InputGroup.Text>
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary px-5"
                id="dropdown-basic"
              >
                High end
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {retreatArray.map((item, index) => {
                  return (
                    <MyDropItem
                      key={index}
                      id={item}
                      func={handleHighRetreat}
                    />
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup>
        </SearchBlock>

        {/* search by set  */}
        <SearchBlock name="Sets" text="Click to select Set.">
          <ListGroup
            defaultActiveKey="#link1"
            style={{ height: '250px', overflow: 'auto' }}
          >
            {setsArray.map((item, index) => {
              return (
                <MyListItem
                  title={item.name}
                  key={index}
                  func={handleSets}
                  id={item.id}
                />
              )
            })}
          </ListGroup>
        </SearchBlock>

        {/* search by serie  */}
        <SearchBlock name="Series" text="Click to select Serie.">
          <ListGroup
            defaultActiveKey="#link2"
            style={{ height: '250px', overflow: 'auto' }}
          >
            {seriesArray.map((item, index) => {
              return (
                <MyListItem
                  title={item.name}
                  key={index}
                  func={handleSerie}
                  id={item.id}
                />
              )
            })}
          </ListGroup>
        </SearchBlock>

        {/* search by rarity  */}
        <SearchBlock name="Rarity" text="Click to select Rarity.">
          <ListGroup
            defaultActiveKey="#link3"
            style={{ height: '250px', overflow: 'auto' }}
          >
            {rarityArray.map((item, index) => {
              return (
                <MyListItem
                  title={item.name}
                  key={index}
                  func={handleRarity}
                  id={item.id}
                />
              )
            })}
          </ListGroup>
        </SearchBlock>

        {/* search(s) resume  */}
        <ChoicesBoard>
          <div className="bg-light mt-4 pt-3 border-top border-secondary">
            <p className="text-center m-0 p-0">Your choice(s) :</p>
            <div>
              {supertype ? (
                <p className="m-0 p-0">supertype : {supertype}</p>
              ) : (
                ''
              )}
              {subtype.length > 0 ? (
                <p className="m-0 p-0">
                  subtype :
                  {subtype.map((elem, index) => {
                    return (
                      <span key={index} className="me-2">
                        {elem}
                      </span>
                    )
                  })}
                </p>
              ) : (
                ''
              )}
              {type ? <p>type: {stringToIcon(type)}</p> : ''}
              {weaknesses ? <p>weaknesses: {stringToIcon(weaknesses)}</p> : ''}
              {resistances ? (
                <p>resistances: {stringToIcon(resistances)}</p>
              ) : (
                ''
              )}
              <p>
                {(lowHp || highHp) && (lowHp !== 10 || highHp !== 500)
                  ? `HP range : ${lowHp} TO ${highHp}`
                  : ''}
              </p>
              <p>
                {(lowRetreat || highRetreat) &&
                (lowRetreat !== 0 || highRetreat !== 6)
                  ? `Retreat range : ${lowRetreat} TO ${highRetreat}`
                  : ''}
              </p>
              {collection ? (
                <p>
                  Set:{' '}
                  {setsArray.map((item) => {
                    if (collection === item.id) {
                      return item.name
                    }
                  })}
                </p>
              ) : (
                ''
              )}
              {serie ? (
                <p>
                  serie:{' '}
                  {seriesArray.map((item) => {
                    if (serie === item.id) {
                      return item.name
                    }
                  })}
                </p>
              ) : (
                ''
              )}
              {rarity ? (
                <p>
                  rarity:{' '}
                  {rarityArray.map((item) => {
                    if (rarity === item.id) {
                      return item.name
                    }
                  })}
                </p>
              ) : (
                ''
              )}

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

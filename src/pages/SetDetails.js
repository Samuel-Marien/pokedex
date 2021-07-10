/* eslint-disable space-before-function-paren */
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Context from '../components/context/'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import Dropdown from 'react-bootstrap/Dropdown'

import MyNavBar from '../components/navbar'

const MyDropItem = (props) => {
  const { func, href, name } = props
  return (
    <Dropdown.Item onClick={func} href={href}>
      {name}
    </Dropdown.Item>
  )
}

MyDropItem.propTypes = {
  func: PropTypes.func,
  href: PropTypes.string,
  name: PropTypes.string
}

const SetDetails = () => {
  const { setDetail } = useContext(Context)
  const { setCardDetail } = useContext(Context)
  const [data, setData] = useState('')
  const [title, setTitle] = useState('')
  const [myDropViewTitle, setMyDropViewTitle] = useState('Images')
  const [myDropTitle, setMyDropTitle] = useState('Set/number')
  const [myDropOrderTitle, setMyDropOrderTitle] = useState('ASC')

  // console.log(setDetail)

  useEffect(() => {
    const fetchData = async () => {
      pokemon.card.where({ q: `set.id:${setDetail}` }).then((result) => {
        // console.log(result.data[0].set.name)
        setTitle(result.data[0].set.name)
        setData(result.data)
      })
    }
    fetchData()
  }, [setData])

  const handleClick = (e) => {
    e.preventDefault()
    setCardDetail(() => e.target.id)
  }

  return (
    <div>
      <MyNavBar />
      <div className="container mt-5 d-flex align-items-baseline">
        <h2>{title}</h2>
        <p className="ms-2">({setDetail})</p>
      </div>
      <div className="container d-flex align-items-baseline">
        {/* First dropDown  */}
        <p className="me-2">View as</p>
        <Dropdown>
          <Dropdown.Toggle
            className="px-2"
            variant="outline-info"
            id="dropdown-basic"
            size="sm"
          >
            {myDropViewTitle}
            <Dropdown.Menu>
              <MyDropItem
                func={() => {
                  setMyDropViewTitle('Images')
                }}
                href="#/action-1"
                name="Images"
              />
              <MyDropItem
                func={() => {
                  setMyDropViewTitle('List')
                }}
                href="#/action-2"
                name="List"
              />
            </Dropdown.Menu>
          </Dropdown.Toggle>
        </Dropdown>
        {/* Second dropDown  */}
        <p className="ms-4 me-2">Sorted by</p>
        <Dropdown>
          <Dropdown.Toggle
            className="px-2"
            variant="outline-info"
            id="dropdown-basic2"
            size="sm"
          >
            {myDropTitle}
            <Dropdown.Menu>
              <MyDropItem
                func={() => {
                  setMyDropTitle('Set/Number')
                }}
                href="#/action-11"
                name="Set/Number"
              />
              <MyDropItem
                func={() => {
                  setMyDropTitle('Name')
                }}
                href="#/action-22"
                name="Name"
              />
              <MyDropItem
                func={() => {
                  setMyDropTitle('Release Date')
                }}
                href="#/action-33"
                name="Release Date"
              />
              <MyDropItem
                func={() => {
                  setMyDropTitle('Rarity')
                }}
                href="#/action-44"
                name="Rarity"
              />
            </Dropdown.Menu>
          </Dropdown.Toggle>
        </Dropdown>
        {/* Third dropDown  */}
        <p className="me-2 ms-4">Ordered by</p>
        <Dropdown>
          <Dropdown.Toggle
            className="px-2"
            variant="outline-info"
            id="dropdown-basic"
            size="sm"
          >
            {myDropOrderTitle}
            <Dropdown.Menu>
              <MyDropItem
                func={() => {
                  setMyDropOrderTitle('Asc')
                }}
                href="#/action-1"
                name="Asc"
              />
              <MyDropItem
                func={() => {
                  setMyDropOrderTitle('Desc')
                }}
                href="#/action-2"
                name="Desc"
              />
            </Dropdown.Menu>
          </Dropdown.Toggle>
        </Dropdown>
      </div>
      <div
        className="container d-flex flex-wrap justify-content-between"
        onClick={handleClick}
      >
        {data ? (
          data.map((item, index) => {
            return (
              <div
                key={index}
                id={item.id}
                className="mt-3 my_radius shadow card_effect"
              >
                <Link to="/details">
                  <img src={item.images.small} role="button" id={item.id} />
                </Link>
              </div>
            )
          })
        ) : (
          <p>Je ne suis pas un spinner...</p>
        )}
      </div>
    </div>
  )
}

export default SetDetails

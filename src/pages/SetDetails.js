/* eslint-disable space-before-function-paren */
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Context from '../components/context/'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import MyNavBar from '../components/navbar'

import Dropdown from 'react-bootstrap/Dropdown'

const SetDetails = () => {
  const { setDetail } = useContext(Context)
  const { setCardDetail } = useContext(Context)
  const [data, setData] = useState('')
  const [title, setTitle] = useState('')
  const [cardOrList, setCardOrList] = useState(false)

  let dropTitle = cardOrList ? 'Images' : 'List'

  console.log(setDetail)

  useEffect(() => {
    const fetchData = async () => {
      pokemon.card.where({ q: `set.id:${setDetail}` }).then((result) => {
        console.log(result.data[0].set.name)
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
        <p className="me-2">View as</p>
        <Dropdown>
          <Dropdown.Toggle
            className="px-2"
            variant="outline-info"
            id="dropdown-basic"
            size="sm"
          >
            {dropTitle}
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setCardOrList(true)
                }}
                href="#/action-1"
              >
                Images
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setCardOrList(false)
                }}
                href="#/action-2"
              >
                List
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Toggle>
        </Dropdown>
        <p className="ms-4 me-2">Sorted by</p>
        <Dropdown>
          <Dropdown.Toggle
            className="px-2"
            variant="outline-info"
            id="dropdown-basic"
            size="sm"
          >
            {dropTitle}
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setCardOrList(true)
                }}
                href="#/action-1"
              >
                Images
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setCardOrList(false)
                }}
                href="#/action-2"
              >
                List
              </Dropdown.Item>
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
              <div key={index} id={item.id}>
                <Link to="/details">
                  <img
                    src={item.images.small}
                    role="button"
                    className="mt-3"
                    id={item.id}
                  />
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

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Dropdown from 'react-bootstrap/Dropdown'

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

const SuperSearchBar = (props) => {
  const { title, id } = props
  const [myDropViewTitle, setMyDropViewTitle] = useState('Images')
  const [myDropTitle, setMyDropTitle] = useState('Set/number')
  const [myDropOrderTitle, setMyDropOrderTitle] = useState('ASC')

  return (
    <div>
      <div className="container mt-5 d-flex align-items-baseline">
        <h2 className="text-capitalize">{title}</h2>
        {id ? <p className="ms-2">({id})</p> : null}
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
    </div>
  )
}

SuperSearchBar.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string
}

export default SuperSearchBar

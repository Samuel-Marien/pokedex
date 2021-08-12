import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import Context from '../context'

import Dropdown from 'react-bootstrap/Dropdown'

const MyDropItem = (props) => {
  const { func, href, name } = props
  const { isDark } = useContext(Context)
  return (
    <Dropdown.Item
      className={isDark ? 'text-dark bg-light ' : 'text-light bg-dark'}
      onClick={func}
      href={href}
    >
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
  const { title, children } = props
  const { myDropViewTitle, setMyDropViewTitle } = useContext(Context)
  // const [myDropTitle, setMyDropTitle] = useState('Set/number')
  const { myDropOrderTitle, setMyDropOrderTitle } = useContext(Context)
  const { isDark } = useContext(Context)

  return (
    <div>
      {children}
      <div className="container mt-4 d-flex align-items-center ">
        <h2
          className={
            isDark ? 'text-capitalize text-dark' : 'text-capitalize text-light'
          }
        >
          {title}
        </h2>
      </div>
      <div className="container mb-3 d-flex align-items-baseline">
        {/* First dropDown  */}
        <p className={isDark ? 'me-2 text-dark' : 'me-2 text-light'}>View as</p>
        <Dropdown>
          <Dropdown.Toggle
            className="px-2"
            variant="outline-info"
            id="dropdown-basic"
            size="sm"
          >
            {myDropViewTitle}
            <Dropdown.Menu className="m-0 p-0">
              <MyDropItem
                func={() => {
                  setMyDropViewTitle('Images')
                }}
                name="Images"
              />
              {isDark ? null : <Dropdown.Divider className="bg-info p-0 m-0" />}
              <MyDropItem
                func={() => {
                  setMyDropViewTitle('List')
                }}
                name="List"
              />
            </Dropdown.Menu>
          </Dropdown.Toggle>
        </Dropdown>
        {/* Second dropDown  */}
        {/* <p className="ms-4 me-2">Sorted by</p>
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
        </Dropdown> */}
        {/* Third dropDown  */}
        <p className={isDark ? 'me-2 ms-4 text-dark' : 'me-2 ms-4 text-light'}>
          Ordered by
        </p>
        <Dropdown>
          <Dropdown.Toggle
            className="px-2"
            variant="outline-info"
            id="dropdown-basic"
            size="sm"
          >
            {myDropOrderTitle}
            <Dropdown.Menu className="m-0 p-0">
              <MyDropItem
                func={() => {
                  setMyDropOrderTitle('Asc')
                }}
                href="#/action-1"
                name="Asc"
              />
              {isDark ? null : <Dropdown.Divider className="bg-info p-0 m-0" />}
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
  id: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.node
}

export default SuperSearchBar

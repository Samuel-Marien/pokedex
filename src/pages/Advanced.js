import React from 'react'
import PropTypes from 'prop-types'

import MyNavBar from '../components/navbar'
import MyInput from '../components/myInput'
import { subtypeArray } from '../components/helper/index'

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'

const MyButon = (props) => {
  const { name } = props
  return (
    <Button
      size="sm"
      type="button"
      className=" me-2 mt-2"
      variant="outline-secondary"
    >
      {name}
    </Button>
  )
}

MyButon.propTypes = {
  name: PropTypes.string
}

const Advanced = () => {
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
              <Button className="me-3 me-md-5" variant="outline-warning">
                Energy
              </Button>
              <Button className="me-3 me-md-5" variant="outline-info">
                Pokemon
              </Button>
              <Button variant="outline-secondary">Trainer</Button>
            </ButtonToolbar>
          </div>
        </div>

        {/* search by Subtypes  */}
        <div className="mt-4 pt-4 d-flex flex-column flex-md-row  border-top border-secondary">
          <p className="p-0 m-0 me-5">Subtypes</p>
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            {subtypeArray.map((elem, index) => {
              return <MyButon key={index} name={elem} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Advanced

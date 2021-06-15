import React from 'react'

import { useContext } from 'react'
import Context from '../components/context'

import MyNavBar from '../components/navbar'

const Cards = () => {
  const { userValue } = useContext(Context)
  return (
    <div>
      <MyNavBar />
      <p>your result here</p>
      {userValue}
    </div>
  )
}

export default Cards

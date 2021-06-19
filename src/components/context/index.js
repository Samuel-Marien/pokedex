import React from 'react'
import { createContext, useState } from 'react'

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('')
  const [cardDetail, setCardDetail] = useState('')
  return (
    <Context.Provider
      {...props}
      value={{ userValue, setUserValue, cardDetail, setCardDetail }}
    />
  )
}

const Context = createContext()
export default Context

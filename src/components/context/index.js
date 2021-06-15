import React from 'react'
import { createContext, useState } from 'react'

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('')
  return <Context.Provider {...props} value={{ userValue, setUserValue }} />
}

const Context = createContext()
export default Context

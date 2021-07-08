import React from 'react'
import { createContext, useState } from 'react'

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('')
  const [cardDetail, setCardDetail] = useState('')
  const [setDetail, setSetDetail] = useState('')
  return (
    <Context.Provider
      {...props}
      value={{
        userValue,
        setUserValue,
        cardDetail,
        setCardDetail,
        setDetail,
        setSetDetail
      }}
    />
  )
}

const Context = createContext()
export default Context

import React from 'react'
import { createContext, useState } from 'react'

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('')
  const [cardDetail, setCardDetail] = useState('')
  const [setDetail, setSetDetail] = useState('')
  const [myDropViewTitle, setMyDropViewTitle] = useState('Images')
  return (
    <Context.Provider
      {...props}
      value={{
        userValue,
        setUserValue,
        cardDetail,
        setCardDetail,
        setDetail,
        setSetDetail,
        myDropViewTitle,
        setMyDropViewTitle
      }}
    />
  )
}

const Context = createContext()
export default Context

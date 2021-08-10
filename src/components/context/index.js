import React from 'react'
import { createContext, useState } from 'react'

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('')
  const [cardDetail, setCardDetail] = useState('')
  const [setDetail, setSetDetail] = useState('')
  const [myDropViewTitle, setMyDropViewTitle] = useState('Images')
  const [myDropOrderTitle, setMyDropOrderTitle] = useState('Asc')
  const [isDark, setIsDark] = useState(true)

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
        setMyDropViewTitle,
        myDropOrderTitle,
        setMyDropOrderTitle,
        isDark,
        setIsDark
      }}
    />
  )
}

const Context = createContext()
export default Context

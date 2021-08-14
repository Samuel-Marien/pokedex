import React, { createContext, useState } from 'react'

export const Provider = (props) => {
  const [userValue, setUserValue] = useState('')
  const [cardDetail, setCardDetail] = useState('')
  const [setDetail, setSetDetail] = useState('')
  const [myDropViewTitle, setMyDropViewTitle] = useState('Images')
  const [myDropOrderTitle, setMyDropOrderTitle] = useState('Asc')
  const [isDark, setIsDark] = useState(true)
  const [imageOfSet, setImageOfSet] = useState('')
  const [advancedData, setAdvancedData] = useState([])

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
        setIsDark,
        imageOfSet,
        setImageOfSet,
        advancedData,
        setAdvancedData
      }}
    />
  )
}

const Context = createContext()
export default Context

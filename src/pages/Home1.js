/* eslint-disable space-before-function-paren */
/* eslint-disable react/prop-types */
import React from 'react'
// import { useState } from 'react'

import axios from 'axios'

const fetchByAll = async () => {
  const { data } = await axios(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
  )
  console.log(data)
  return data
}

const fetchPrevious = async () => {
  const url = await fetchByAll()
  const previousUrl = url.previous
  console.log(previousUrl)
  const { data } = await axios(`${previousUrl}`)
  console.log('les data davant : ', data)
  return data
}

const fetchNext = async () => {
  const url = await fetchByAll()
  const nextUrl = url.next
  console.log(nextUrl)
  const { data } = await axios(`${nextUrl}`)
  console.log('les data apres : ', data)
  return data
}

const MyButton = (props) => {
  const { buttonTitle, func } = props
  return <button onClick={func}> {buttonTitle}</button>
}

const Home = () => {
  // const [state, setSate] = useState(UrlState)

  return (
    <div>
      <MyButton buttonTitle="previous" func={fetchPrevious} />
      {/* <MyButton buttonTitle="start" func={fetchByAll} /> */}
      <MyButton buttonTitle="next" func={fetchNext} />
    </div>
  )
}

export default Home

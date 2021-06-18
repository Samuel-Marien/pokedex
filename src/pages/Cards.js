/* eslint-disable space-before-function-paren */
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import Context from '../components/context'
import MyNavBar from '../components/navbar'

const Cards = () => {
  const [data, setData] = useState('')
  const { userValue } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      pokemon.card
        .where({ q: `name:${userValue}*` })
        .then((result) => {
          console.log(result)
          return result.data
        })
        .then((newResult) => {
          setData(newResult)
        })
    }
    fetchData()
  }, [setData])

  console.log(data)

  return (
    <div>
      <MyNavBar />
      <p>your result for {userValue}</p>
      <ul>
        {data ? (
          data.map((item, index) => {
            return (
              <div key={index}>
                <li>{item.name}</li>
                <Link to="/details">
                  <img src={item.images.small} role="button" />
                </Link>
              </div>
            )
          })
        ) : (
          <p>please wait a few moment...</p>
        )}
      </ul>
    </div>
  )
}

export default Cards

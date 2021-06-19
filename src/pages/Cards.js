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
      <div className="container d-flex flex-wrap justify-content-between">
        {data ? (
          data.map((item, index) => {
            return (
              <div key={index}>
                <Link to="/details">
                  <img src={item.images.small} role="button" className="mt-3" />
                </Link>
              </div>
            )
          })
        ) : (
          <p>please wait a few moment...</p>
        )}
      </div>
    </div>
  )
}

export default Cards

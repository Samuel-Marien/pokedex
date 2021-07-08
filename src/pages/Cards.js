/* eslint-disable space-before-function-paren */
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Context from '../components/context'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import MyNavBar from '../components/navbar'

const Cards = () => {
  const [data, setData] = useState('')
  const { userValue } = useContext(Context)
  const { setCardDetail } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      pokemon.card
        .where({ q: `name:${userValue}*` })
        .then((result) => {
          return result.data
        })
        .then((newResult) => {
          setData(newResult)
        })
    }
    fetchData()
  }, [setData])

  const handleClick = (e) => {
    e.preventDefault()
    setCardDetail(() => e.target.id)
  }

  return (
    <div>
      <MyNavBar />
      <div
        className="container d-flex flex-wrap justify-content-between"
        onClick={handleClick}
      >
        {data ? (
          data.map((item, index) => {
            return (
              <div key={index} id={item.id}>
                <Link to="/details">
                  <img
                    src={item.images.small}
                    role="button"
                    className="mt-3"
                    id={item.id}
                  />
                </Link>
              </div>
            )
          })
        ) : (
          <p>Je ne suis pas un spinner...</p>
        )}
      </div>
    </div>
  )
}

export default Cards

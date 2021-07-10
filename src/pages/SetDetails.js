/* eslint-disable space-before-function-paren */
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Context from '../components/context/'
import SuperSearchBar from '../components/super_search_bar'
import MySpinner from '../components/spinner'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import MyNavBar from '../components/navbar'

const SetDetails = () => {
  const { setDetail } = useContext(Context)
  const { setCardDetail } = useContext(Context)
  const [data, setData] = useState('')
  const [title, setTitle] = useState('')

  // console.log(setDetail)

  useEffect(() => {
    const fetchData = async () => {
      pokemon.card.where({ q: `set.id:${setDetail}` }).then((result) => {
        // console.log(result.data[0].set.name)
        setTitle(result.data[0].set.name)
        setData(result.data)
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
      <SuperSearchBar title={title} id={setDetail} />
      <div
        className="container d-flex flex-wrap justify-content-between"
        onClick={handleClick}
      >
        {data ? (
          data.map((item, index) => {
            return (
              <div
                key={index}
                id={item.id}
                className="mt-3 my_radius shadow card_effect"
              >
                <Link to="/details">
                  <img src={item.images.small} role="button" id={item.id} />
                </Link>
              </div>
            )
          })
        ) : (
          <MySpinner />
        )}
      </div>
    </div>
  )
}

export default SetDetails

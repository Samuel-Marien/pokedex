/* eslint-disable space-before-function-paren */
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Context from '../components/context'
import MySpinner from '../components/spinner'
import SuperSearchBar from '../components/super_search_bar'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import MyNavBar from '../components/navbar'

const Cards = () => {
  const [data, setData] = useState('')
  const { userValue } = useContext(Context)
  const { setCardDetail } = useContext(Context)
  const { myDropViewTitle } = useContext(Context)

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

  console.log(data)

  const handleClick = (e) => {
    e.preventDefault()
    // console.log(e.target.id)
    setCardDetail(() => e.target.id)
  }

  return (
    <div>
      <MyNavBar />
      <SuperSearchBar title={userValue} />

      {/* IMAGES DISPLAY  */}
      {myDropViewTitle === 'Images' ? (
        <div
          className="container d-flex flex-wrap justify-content-between"
          onClick={handleClick}
        >
          {data ? (
            data
              .map((item, index) => {
                return (
                  <div key={index} id={item.id}>
                    <Link to="/details">
                      <img
                        src={item.images.small}
                        role="button"
                        className="mt-3 my_radius shadow card_effect"
                        id={item.id}
                      />
                    </Link>
                  </div>
                )
              })
              .reverse()
          ) : (
            <MySpinner />
          )}
        </div>
      ) : (
        // LIST DISPLAY
        <div className="container" onClick={handleClick}>
          <div className="row border-bottom border-secondary pb-2 mb-2 px-4 fw-bold">
            <div className="col-3">Set</div>
            <div className="col">No</div>
            <div className="col">Name</div>
            <div className="col">Rarity</div>
            <div className="col">Types</div>
            <div className="col">Supertype</div>
            <div className="col">Subtypes</div>
            <div className="col">Price</div>
          </div>
          {data ? (
            data
              .map((item, index) => {
                return (
                  <div
                    className="list-group list-group-flush"
                    key={index}
                    id={item.id}
                  >
                    <div className="list-group-item list-group-item-action px-0">
                      <div className="row px-4">
                        <div className="col-3">{item.set.name}</div>
                        <div className="col">{item.number}</div>
                        <div className="col">{item.name}</div>
                        <div className="col">
                          {item.rarity ? item.rarity : null}
                        </div>
                        <div className="col">
                          {item.types ? item.types : null}
                        </div>
                        <div className="col">
                          {item.supertype ? item.supertype : null}
                        </div>
                        <div className="col">
                          {item.subtypes ? item.subtypes : null}
                        </div>
                        {/* PRICES SECTION  */}
                        <div className="col">
                          {item.tcgplayer && item.tcgplayer.prices.normal ? (
                            <p>{item.tcgplayer.prices.normal.market}</p>
                          ) : null}
                          {/* {item.tcgplayer &&
                          item.tcgplayer.prices.reverseHolofoil ? (
                            <p>
                              {item.tcgplayer.prices.reverseHolofoil.market}
                            </p>
                          ) : null} */}
                          {item.tcgplayer && item.tcgplayer.prices.holofoil ? (
                            <p>{item.tcgplayer.prices.holofoil.market}</p>
                          ) : null}
                          {item.tcgplayer &&
                          item.tcgplayer.prices['1stEditionHolofoil']
                            ? item.tcgplayer.prices['1stEditionHolofoil'].market
                            : null}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
              .reverse()
          ) : (
            <MySpinner />
          )}
        </div>
      )}
    </div>
  )
}

export default Cards

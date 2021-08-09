/* eslint-disable space-before-function-paren */
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Context from '../components/context/'
import SuperSearchBar from '../components/super_search_bar'
import MySpinner from '../components/spinner'
import MyNavBar from '../components/navbar'
import stringToIcon from '../components/helper'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const SetDetails = () => {
  const { setDetail } = useContext(Context)
  const { setCardDetail } = useContext(Context)
  const { myDropViewTitle } = useContext(Context)
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

  const renderTooltip = (src) => <img src={src} />

  return (
    <div>
      <MyNavBar />
      <SuperSearchBar title={title} id={setDetail} />
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
        <div className="container">
          <div className="row border-bottom border-secondary pb-2 mb-2 px-4 fw-bold">
            <div className="col-3">Set</div>
            <div className="col-1">No</div>
            <div className="col">Name</div>
            <div className="col">Rarity</div>
            <div className="col-1">Types</div>
            <div className="col">Supertype</div>
            <div className="col">Subtypes</div>
            <div className="col-1">Price</div>
          </div>
          {data ? (
            data
              .map((item, index) => {
                return (
                  <div
                    className="list-group list-group-flush"
                    key={index}
                    id={item.id}
                    onClick={handleClick}
                  >
                    <OverlayTrigger
                      placement="auto"
                      overlay={renderTooltip(item.images.small)}
                      transition={false}
                    >
                      <Link to="/details" className="text-decoration-none ">
                        <div
                          id={item.id}
                          className="list-group-item list-group-item-action pt-3"
                        >
                          <div className="row px-4" id={item.id}>
                            <div className="col-3" id={item.id}>
                              {item.set.name}
                            </div>
                            <div className="col-1" id={item.id}>
                              {item.number}
                            </div>
                            <div className="col" id={item.id}>
                              {item.name}
                            </div>
                            <div className="col" id={item.id}>
                              {item.rarity ? item.rarity : null}
                            </div>
                            <div className="col-1" id={item.id}>
                              {item.types ? (
                                <div>{stringToIcon(item.types[0])}</div>
                              ) : (
                                '_'
                              )}
                            </div>

                            <div className="col" id={item.id}>
                              {item.supertype ? item.supertype : null}
                            </div>
                            <div className="col" id={item.id}>
                              {item.subtypes ? item.subtypes : null}
                            </div>
                            {/* PRICES SECTION  */}
                            <div className="col-1" id={item.id}>
                              {item.tcgplayer &&
                              item.tcgplayer.prices.normal ? (
                                <div className="text-primary" id={item.id}>
                                  $ {item.tcgplayer.prices.normal.market}
                                </div>
                              ) : null}
                              {item.tcgplayer &&
                              item.tcgplayer.prices.holofoil ? (
                                <div className="text-primary" id={item.id}>
                                  $ {item.tcgplayer.prices.holofoil.market}
                                </div>
                              ) : null}
                              {item.tcgplayer &&
                              item.tcgplayer.prices['1stEditionHolofoil'] ? (
                                <div className="text-primary" id={item.id}>
                                  $
                                  {
                                    <p id={item.id}>
                                      {
                                        item.tcgplayer.prices[
                                          '1stEditionHolofoil'
                                        ].market
                                      }
                                    </p>
                                  }
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </OverlayTrigger>
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

export default SetDetails

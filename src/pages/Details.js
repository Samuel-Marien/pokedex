/* eslint-disable space-before-function-paren */
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Context from '../components/context/'

import PropTypes from 'prop-types'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'

import { TiArrowMaximiseOutline, TiArrowMinimiseOutline } from 'react-icons/ti'

import MyNavBar from '../components/navbar'
import stringToIcon from '../components/helper'

const Details = () => {
  const { cardDetail } = useContext(Context)
  const { setSetDetail } = useContext(Context)
  const { setUserValue } = useContext(Context)
  const [data, setData] = useState({ myData: [] })

  useEffect(() => {
    const fetchData = async () => {
      pokemon.card.find(`${cardDetail}`).then((card) => {
        setData({ myData: [card] })
      })
    }
    fetchData()
  }, [setData])

  console.log(data.myData)

  const DataMarket = (props) => {
    const { name, textColor, target } = props
    return (
      <div className="col-3">
        <p className="mb-1" style={{ fontSize: '.8rem' }}>
          {name}
        </p>
        <p className={textColor}>${target}</p>
      </div>
    )
  }

  DataMarket.propTypes = {
    name: PropTypes.string,
    textColor: PropTypes.string,
    target: PropTypes.number
  }

  const DoublePills = (props) => {
    const { name, target } = props
    return (
      <div className="d-flex" style={{ fontSize: '.8rem' }}>
        <span
          className="bg-dark text-light px-1"
          style={{
            borderTopLeftRadius: '5px',
            borderBottomLeftRadius: '5px'
          }}
        >
          {name}
        </span>
        {target ? (
          <span
            className="bg-success text-light px-1"
            style={{
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '5px'
            }}
          >
            Legal
          </span>
        ) : (
          <span
            className="border border-dark px-1"
            style={{
              borderTopRightRadius: '5px',
              borderBottomRightRadius: '5px'
            }}
          >
            Not Legal
          </span>
        )}
      </div>
    )
  }

  DoublePills.propTypes = {
    name: PropTypes.string,
    target: PropTypes.string
  }

  const handleClick = (e) => {
    e.preventDefault()
    // console.log(e.target.id)
    setSetDetail(() => e.target.id)
  }

  const handleNewDetails = (e) => {
    e.preventDefault()
    console.log(e.target.id)
    setUserValue(() => e.target.id)
  }

  const MyCard = () => {
    return data.myData ? (
      data.myData.map((item, index) => {
        return (
          <div key={index} className="container mt-5">
            <div className="my-5">
              <div className="row gx-0">
                {/* Left Side */}
                {item.images.large ? (
                  <div className="container col-10 col-md-4  me-md-3 mb-4">
                    <Image
                      src={item.images.large}
                      fluid
                      alt="poke card"
                      className="my_radius shadow"
                    />
                  </div>
                ) : null}

                {/* Right Side */}
                <div className="col">
                  {/* Header */}
                  <div className="row gx-0 px-3">
                    <div className="col-5 col-lg-10 d-flex flex-column flex-lg-row align-items-baseline">
                      <h1 className="me-2">{item.name}</h1>
                      <p style={{ fontSize: '.8rem' }}>by {item.artist}</p>
                    </div>
                    {item.hp ? (
                      <div className="col d-flex justify-content-end align-items-start pt-1">
                        <h4 className="me-1">HP </h4>
                        <h4 className="me-2">{item.hp}</h4>
                        {stringToIcon(item.types[0])}
                      </div>
                    ) : null}
                  </div>
                  {/* Sub Header  */}
                  <div
                    className="d-flex flex-column flex-md-row justify-content-between gx-0 border-bottom border-secondary px-3"
                    style={{ fontSize: '.9rem' }}
                  >
                    <div onClick={handleClick} id={item.set.id}>
                      <Link
                        to="/set_details"
                        id={item.set.id}
                        className="d-flex text-decoration-none"
                      >
                        <p className="me-1 text-info" id={item.set.id}>
                          {item.set.name}
                        </p>
                        <img
                          src={item.set.images.symbol}
                          style={{ width: '15', height: '15px' }}
                          id={item.set.id}
                        />
                      </Link>
                    </div>

                    {/* TYPE CARD  */}
                    <div className="mb-2 mb-md-0">
                      {item.supertype ? (
                        <Badge pill className="bg-warning me-2">
                          {item.supertype}
                        </Badge>
                      ) : null}
                      {item.subtypes
                        ? item.subtypes.map((elem, index) => {
                            return (
                              <Badge key={index} pill className="bg-info me-2">
                                {elem}
                              </Badge>
                            )
                          })
                        : null}

                      <Badge pill className="bg-secondary">
                        {item.rarity}
                      </Badge>
                    </div>
                  </div>

                  {/* Evolution section  */}
                  <div className="px-3 d-flex align-items-baseline">
                    {item.evolvesFrom ? (
                      <div
                        role="button my-2"
                        onClick={handleNewDetails}
                        id={item.evolvesFrom}
                      >
                        <TiArrowMinimiseOutline
                          color={'#0dcaf0'}
                          size={25}
                          id={item.evolvesFrom}
                        />
                        <Link
                          id={item.evolvesFrom}
                          to="/cards"
                          className="text-decoration-none text-dark"
                        >
                          {item.evolvesFrom}
                        </Link>
                      </div>
                    ) : null}
                    {item.evolvesTo ? (
                      <div className="ms-2 my-2">
                        {item.evolvesTo.map((elem, index) => {
                          return (
                            <div key={index} onClick={handleNewDetails}>
                              <TiArrowMaximiseOutline
                                color={'#0dcaf0'}
                                size={25}
                              />
                              <Link
                                to="/cards"
                                className="text-decoration-none text-dark"
                              >
                                <span className="me-1" id={elem}>
                                  {elem}
                                </span>
                              </Link>
                            </div>
                          )
                        })}
                      </div>
                    ) : null}
                  </div>

                  {/* Body  */}
                  {item.tcgplayer ? (
                    <div className="bg-light p-3">
                      {/* Price header  */}
                      <div className="pt-2">
                        <div className="d-flex align-items-baseline">
                          <h3 className="mb-1 me-2">Prices</h3>
                          <a
                            href={item.tcgplayer.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-info text-decoration-none"
                            style={{ fontSize: '.8rem' }}
                          >
                            Buy Now From TCGplayer
                          </a>
                        </div>
                        <p style={{ fontSize: '.8rem' }}>
                          Last Updated {item.tcgplayer.updatedAt}
                        </p>
                      </div>
                      {/* Price body  */}
                      {/* NORMAL Market */}
                      <div className="container">
                        {item.tcgplayer.prices.normal ? (
                          <div className="row gx-0">
                            <DataMarket
                              name=" NORMAL MARKET"
                              textColor="text-success"
                              target={item.tcgplayer.prices.normal.market}
                            />
                            <DataMarket
                              name="NORMAL LOW"
                              textColor="text-warning"
                              target={item.tcgplayer.prices.normal.low}
                            />
                            <DataMarket
                              name="NORMAL MID"
                              textColor="text-info"
                              target={item.tcgplayer.prices.normal.mid}
                            />
                            <DataMarket
                              name="NORMAL HIGH"
                              textColor="text-danger"
                              target={item.tcgplayer.prices.normal.high}
                            />
                          </div>
                        ) : null}
                      </div>
                      {/* HOLOFOIL Market */}
                      <div className="container">
                        {item.tcgplayer.prices.holofoil ? (
                          <div className="row gx-0">
                            <DataMarket
                              name="HOLOFOIL MARKET"
                              textColor="text-success"
                              target={item.tcgplayer.prices.holofoil.market}
                            />
                            <DataMarket
                              name="HOLOFOIL LOW"
                              textColor="text-warning"
                              target={item.tcgplayer.prices.holofoil.low}
                            />
                            <DataMarket
                              name="HOLOFOIL MID"
                              textColor="text-info"
                              target={item.tcgplayer.prices.holofoil.mid}
                            />
                            <DataMarket
                              name="HOLOFOIL HIGH"
                              textColor="text-danger"
                              target={item.tcgplayer.prices.holofoil.high}
                            />
                          </div>
                        ) : null}
                      </div>
                      {/* Reverse holofoil market  */}
                      {item.tcgplayer.prices.reverseHolofoil ? (
                        <div className="row gx-0">
                          <DataMarket
                            name="REVERSE HOLOFOIL MARKET"
                            textColor="text-success"
                            target={
                              item.tcgplayer.prices.reverseHolofoil.market
                            }
                          />
                          <DataMarket
                            name="REVERSE HOLOFOIL LOW"
                            textColor="text-warning"
                            target={item.tcgplayer.prices.reverseHolofoil.low}
                          />
                          <DataMarket
                            name="REVERSE HOLOFOIL MID"
                            textColor="text-info"
                            target={item.tcgplayer.prices.reverseHolofoil.mid}
                          />
                          <DataMarket
                            name="REVERSE HOLOFOIL HIGH"
                            textColor="text-danger"
                            target={item.tcgplayer.prices.reverseHolofoil.high}
                          />
                        </div>
                      ) : null}
                      {/* 1st edition holofoil market  */}
                      {item.tcgplayer.prices['1stEditionHolofoil'] ? (
                        <div className="row gx-0">
                          <DataMarket
                            name="1st Edit HOLOFOIL MARKET"
                            textColor="text-success"
                            target={
                              item.tcgplayer.prices['1stEditionHolofoil'].market
                            }
                          />
                          <DataMarket
                            name="1st Edit HOLOFOIL LOW"
                            textColor="text-warning"
                            target={
                              item.tcgplayer.prices['1stEditionHolofoil'].low
                            }
                          />
                          <DataMarket
                            name="1st Edit HOLOFOIL MID"
                            textColor="text-info"
                            target={
                              item.tcgplayer.prices['1stEditionHolofoil'].mid
                            }
                          />
                          <DataMarket
                            name="1st Edit HOLOFOIL HIGH"
                            textColor="text-danger"
                            target={
                              item.tcgplayer.prices['1stEditionHolofoil'].high
                            }
                          />
                        </div>
                      ) : null}
                    </div>
                  ) : null}

                  {/* Flavour text */}
                  {item.flavorText ? (
                    <div className="p-3 px-5 w-75 mx-auto">
                      <p style={{ fontSize: '.8rem' }}>
                        <em>{item.flavorText}</em>
                      </p>
                    </div>
                  ) : null}

                  {/* ABILITIES  */}
                  {item.abilities
                    ? item.abilities.map((ability, index) => {
                        return (
                          <div key={index}>
                            <div className="p-3">
                              <p className="mb-1 fw-bold">ABILITIES</p>
                              <div className="d-flex">
                                <p className="me-2 m-0 fw-bold">
                                  {ability.name}
                                </p>
                                <Badge
                                  pill
                                  className="bg-danger d-flex align-items-center p-1 m-0"
                                >
                                  {ability.type}
                                </Badge>
                              </div>
                              <p className="fw-light">{ability.text}</p>
                            </div>
                          </div>
                        )
                      })
                    : null}

                  {/* Rules  */}
                  {item.rules ? (
                    <div className="px-3 pb-3">
                      {item.rules.map((elem, index) => {
                        if (index >= 1) {
                          return (
                            <p key={index} className="text-secondary">
                              <em>{elem}</em>
                            </p>
                          )
                        } else {
                          return (
                            <p key={index} className="mt-2 mb-0">
                              <em>{elem}</em>
                            </p>
                          )
                        }
                      })}
                    </div>
                  ) : null}

                  {/* ATTACK  */}
                  <div className="p-3 bg-light">
                    <p className="mb-2 fw-bold">ATTACKS</p>
                    {item.attacks ? (
                      item.attacks.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="d-flex justify-content-between">
                              <div className="d-flex">
                                {item.cost.map((elem, index) => {
                                  return (
                                    <div key={index}>{stringToIcon(elem)}</div>
                                  )
                                })}
                                <p className="ms-4">{item.name}</p>
                              </div>
                              <p className="fw-bold">{item.damage}</p>
                            </div>
                            <p className="fw-light">{item.text}</p>
                          </div>
                        )
                      })
                    ) : (
                      <p>N/A</p>
                    )}
                  </div>
                  <div className="p-3">
                    <div className="container">
                      <div className="row">
                        <div className="col-4">
                          <p>WEAKNESS</p>
                          {item.weaknesses ? (
                            <div>
                              {stringToIcon(item.weaknesses[0].type)}
                              {item.weaknesses[0].value}
                            </div>
                          ) : (
                            <p>N/A</p>
                          )}
                        </div>
                        <div className="col-4">
                          <p>RESISTANCE</p>
                          {item.resistances ? (
                            <div>
                              {stringToIcon(item.resistances[0].type)}{' '}
                              {item.resistances[0].value}
                            </div>
                          ) : (
                            <p>N/A</p>
                          )}
                        </div>
                        <div className="col-4">
                          <p>RETREAT COST</p>
                          {item.retreatCost ? (
                            <div className="d-flex">
                              {item.retreatCost.map((elem, index) => {
                                return (
                                  <div key={index}>{stringToIcon(elem)}</div>
                                )
                              })}
                            </div>
                          ) : (
                            <p>N/A</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-light">
                    <div className="container">
                      <div className="row">
                        <div className="col-4">
                          <p className="mb-1">NUMBER</p>
                          <p className="fw-light">
                            {item.number} / {item.set.printedTotal}
                          </p>
                        </div>
                        <div className="col-4">
                          <p className="mb-1">NATIONAL POKEDEX</p>
                          <p className="fw-light">
                            {item.nationalPokedexNumbers
                              ? item.nationalPokedexNumbers
                              : 'N/A'}
                          </p>
                        </div>
                        <div className="col-4">
                          <p className="mb-1">ID</p>
                          <p className="fw-light">{item.id}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <div className="d-flex">
                      <div className="container">
                        <div className="row">
                          <div className="col-4">
                            <DoublePills
                              name="Standard"
                              target={item.legalities.standard}
                            />
                          </div>
                          <div className="col-4">
                            <DoublePills
                              name="Expanded"
                              target={item.legalities.expanded}
                            />
                          </div>
                          <div className="col-4">
                            <DoublePills
                              name="Unlimited"
                              target={item.legalities.unlimited}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <p>No data to display</p>
    )
  }

  return (
    <div>
      <MyNavBar />
      <MyCard />
    </div>
  )
}

export default Details

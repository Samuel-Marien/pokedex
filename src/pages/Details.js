/* eslint-disable space-before-function-paren */
import React, { useContext, useState, useEffect } from 'react'

import Context from '../components/context/'

import PropTypes from 'prop-types'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import Image from 'react-bootstrap/Image'
import Badge from 'react-bootstrap/Badge'

import MyNavBar from '../components/navbar'
import stringToIcon from '../components/helper'

const Details = () => {
  const { cardDetail } = useContext(Context)
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

  const MyCard = () => {
    return data.myData ? (
      data.myData.map((item, index) => {
        return (
          <div key={index} className="container mt-5">
            <div className="my-5">
              <div className="row gx-0">
                {/* Left Side */}
                <div className="container col-10 col-md-4  me-md-3 mb-4">
                  <Image src={item.images.large} fluid alt="poke card" />
                </div>
                {/* Right Side */}
                <div className="col">
                  {/* Header */}
                  <div className="row gx-0 px-3">
                    <div className="col-5 col-lg-10 d-flex flex-column flex-lg-row align-items-baseline">
                      <h1 className="me-2">{item.name}</h1>
                      <p style={{ fontSize: '.8rem' }}>by {item.artist}</p>
                    </div>
                    <div className="col d-flex justify-content-end align-items-start pt-1">
                      <h4 className="me-1">HP </h4>
                      <h4 className="me-2">{item.hp}</h4>
                      {stringToIcon(item.types[0])}
                    </div>
                  </div>
                  {/* Sub Header  */}
                  <div
                    className="d-flex flex-column flex-md-row justify-content-between gx-0 border-bottom border-secondary px-3"
                    style={{ fontSize: '.9rem' }}
                  >
                    <div className="d-flex">
                      <p className="me-1">set: {item.set.name}</p>
                      <img
                        src={item.set.images.symbol}
                        style={{ width: '15', height: '15px' }}
                      />
                    </div>
                    <p>
                      <Badge pill className="bg-warning me-2">
                        {item.supertype}
                      </Badge>
                      <Badge pill className="bg-info">
                        {item.subtypes}
                      </Badge>

                      <span className="ms-3">rarity: {item.rarity}</span>
                    </p>
                  </div>
                  {/* Body  */}
                  <div className="bg-light p-3">
                    {/* Price header  */}
                    <div className="pt-2">
                      <div className="d-flex align-items-baseline">
                        <h3 className="mb-1 me-2">Prices</h3>
                        <a
                          href={item.tcgplayer.url}
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
                          target={item.tcgplayer.prices.reverseHolofoil.market}
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
                  </div>
                  {/* ABILITIES  */}
                  <div className="p-3">
                    <p className="mb-1 fw-bold">ABILITIES</p>
                    {item.abilities ? (
                      item.abilities.map((ability, index) => {
                        return (
                          <div key={index}>
                            <div className="d-flex">
                              <p className="me-2 m-0 fw-bold">{ability.name}</p>
                              <Badge
                                pill
                                className="bg-danger d-flex align-items-center p-1 m-0"
                              >
                                {ability.type}
                              </Badge>
                            </div>
                            <p className="fw-light">{ability.text}</p>
                          </div>
                        )
                      })
                    ) : (
                      <p className="fw-light">no abilities!</p>
                    )}
                  </div>
                  {/* ATTACK  */}
                  <div className="p-3 bg-light">
                    <p className="mb-1 fw-bold">ATTACKS</p>

                    {item.attacks.map((item, index) => {
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
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* examples pik */}
            {/* <div className="d-flex justify-content-between container">
              <div>
                <p>id : {item.id}</p>
                <p>National Pokedex Numbers : {item.nationalPokedexNumbers}</p>
                <p>number: {item.number}</p>

                <p> retreat cost: {item.convertedRetreatCost}</p>
                <p>retreat cost type: {item.retreatCost}</p>
              </div>
              <div>
                <div>
                  evolves to :{' '}
                  <ul>
                    {item.evolvesTo || item.evolvesTo === !undefined
                      ? item.evolvesTo.map((item, index) => {
                          return <li key={index}>{item}</li>
                        })
                      : 'no'}
                  </ul>
                </div>
                <p>type: {item.types}</p>
                <p>
                  evolves from:{' '}
                  {item.evolvesFrom || item.evolvesFrom === !undefined
                    ? item.evolvesFrom
                    : 'no'}
                </p>
                <p>
                  rules :{' '}
                  {item.rules ? item.rules : 'no specific rule for this card'}
                </p>
              </div>
            </div> */}
            {/* <div className="bg-light container">
              <p>attacks:</p>
              {item.attacks.map((item, index) => {
                return (
                  <div key={index} className="shadow p-2">
                    <p>{item.name}</p>
                    <p>damage: {item.damage}</p>
                    <p>{item.text}</p>
                    <p>{item.cost}</p>
                  </div>
                )
              })}
            </div> */}
          </div>
        )
      })
    ) : (
      <p>plop</p>
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

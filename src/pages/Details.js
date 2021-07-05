/* eslint-disable space-before-function-paren */
import React, { useContext, useState, useEffect } from 'react'

import Context from '../components/context/'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import Image from 'react-bootstrap/Image'

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

  const MyCard = () => {
    return data.myData ? (
      data.myData.map((item, index) => {
        return (
          <div key={index} className="container mt-5 text-dark">
            <div className="border border-info my-5">
              <div className="row gx-0">
                {/* Left Side */}
                <div className="col-12 col-md-3">
                  <Image
                    src={item.images.small}
                    fluid
                    alt="poke card"
                    className="shadow"
                  />
                </div>
                {/* Right Side */}
                <div className="col">
                  {/* Header */}
                  <div className="row border border-dark gx-0">
                    <div className="col-5 col-md-10 d-flex flex-column flex-md-row align-items-baseline">
                      <h1 className="me-2">{item.name}</h1>
                      <p style={{ fontSize: '.8rem' }}>by {item.artist}</p>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center border border-dark">
                      <h4 className="me-1">HP </h4>
                      <h4 className="me-2">{item.hp}</h4>
                      {stringToIcon(item.types[0])}
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column flex-md-row justify-content-between border border-dark gx-0"
                    style={{ fontSize: '.9rem' }}
                  >
                    <p className="me-3 pt-2">
                      {item.supertype} - {item.subtypes}
                      <span className="ms-3">rarity: {item.rarity}</span>
                    </p>

                    <div className="d-flex">
                      <p className="me-1 pt-2">set: {item.set.name}</p>
                      <img
                        src={item.set.images.logo}
                        style={{ width: '30px', height: '30px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* examples pik */}
            <div className="d-flex justify-content-between container">
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
            </div>
            <div className="bg-light container">
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
            </div>
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

/* eslint-disable space-before-function-paren */
import React, { useContext, useState, useEffect } from 'react'

import Context from '../components/context/'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import Image from 'react-bootstrap/Image'

import MyNavBar from '../components/navbar'

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

  // const stringToIcon = (string) => {

  // }

  const MyCard = () => {
    return data.myData ? (
      data.myData.map((item, index) => {
        return (
          <div key={index} className="container mt-5">
            <div className="border border-info my-5">
              <div className="row">
                <div className="col-12 col-md-3">
                  <Image
                    src={item.images.small}
                    fluid
                    alt="poke card"
                    className="shadow"
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <div className="col-8">
                      <h1>{item.name}</h1>
                      <p>
                        {item.supertype} - {item.subtypes}
                      </p>
                    </div>
                    <div className="col-4 text-end">HP {item.hp}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between container">
              <div>
                <img src={item.images.small} alt="poke card" />
              </div>

              <div>
                <p>name: {item.name}</p>
                <p>artist: {item.artist}</p>
                <p>id : {item.id}</p>
                <p>National Pokedex Numbers : {item.nationalPokedexNumbers}</p>
                <p>number: {item.number}</p>
                <p>rarity: {item.rarity}</p>
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
                <p>supertype: {item.supertype}</p>
                <p>subtypes: {item.subtypes}</p>
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

/* eslint-disable space-before-function-paren */
import React, { useContext, useState, useEffect } from 'react'

import Context from '../components/context/'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import MyNavBar from '../components/navbar'

const Details = () => {
  const { cardDetail } = useContext(Context)
  const [data, setData] = useState({ myData: [] })

  useEffect(() => {
    const fetchData = async () => {
      pokemon.card.find(`${cardDetail}`).then((card) => {
        setData({ myData: [card] })
        console.log(card)
      })
    }
    fetchData()
  }, [])

  console.log(data.myData)

  const MyCard = () => {
    return data.myData ? (
      data.myData.map((item, index) => {
        return (
          <div key={index} className="d-flex">
            <div>
              <img src={item.images.large} alt="poke card" className="w-75" />
            </div>
            <div>
              <p>name: {item.name}</p>
              <p>artist: {item.artist}</p>
              <p>id : {item.id}</p>
              <p>National Pokedex Numbers : {item.nationalPokedexNumbers}</p>
              <p>number: {item.number}</p>
              <p>rarity: {item.rarity}</p>
              <p>subtypes: {item.subtypes}</p>
              <p> retreat cost: {item.convertedRetreatCost}</p>
              <p>retreat cost type: {item.retreatCost}</p>
              <p>evolves to : {item.evolvesTo}</p>
              <p>supertype: {item.supertype}</p>
              <p>subtypes: {item.subtypes}</p>
              <p>type: {item.types}</p>
              <p>evolves from: {item.evolvesFrom}</p>
              <p>rules : {item.rules}</p>
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

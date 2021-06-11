/* eslint-disable space-before-function-paren */
import React from 'react'
import { useState } from 'react'

import axios from 'axios'

import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

const fetchedByAllin = async (a) => {
  const { data } = await axios(`https://pokeapi.co/api/v2/${a}`)
  console.log('mes data de base :')
  console.log(data)
  return data
}

const fetchedById = async (a) => {
  const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${a}`)
  return data
}

const Home = () => {
  const [next, setNext] = useState(0)
  const [name, setName] = useState('')
  const [cards, setCards] = useState('')

  const handleClick = async () => {
    let bigPokeArray = []
    let pokeArray = []

    setNext(next + 20)

    const data = await fetchedByAllin(`pokemon?offset=${next}&limit=20`)

    setName(
      data.results.map((item, index) => {
        pokeArray.push(item.name)
        return <div key={index}>{item.name}</div>
      })
    )
    console.log(name)
    for (let i = 0; i < pokeArray.length; i++) {
      const databyId = await fetchedById(pokeArray[i])
      bigPokeArray.push(databyId)
    }
    console.log(bigPokeArray)

    setCards(
      bigPokeArray.map((item, index) => {
        return (
          <Card key={index} className="border border-dark p-2 mt-2">
            <Card.Header>
              <Card.Title>{item.name}</Card.Title>
            </Card.Header>

            <Card.Img
              src={item.sprites.other.dream_world.front_default}
              alt={item.name}
              style={{ width: '10rem', height: '10rem' }}
            />
          </Card>
        )
      })
    )
  }

  return (
    <div>
      <button onClick={handleClick}>
        <a>Previous</a>
      </button>
      <button onClick={handleClick}>
        <a>Next</a>
      </button>

      <div className="container">
        <CardDeck className="d-flex flex-wrap justify-content-between">
          {cards}
        </CardDeck>
      </div>
    </div>
  )
}

export default Home

/* eslint-disable space-before-function-paren */
import React from 'react'
// import axios from 'axios'

import pokemon from 'pokemontcgsdk'

pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

const getAllSet = async () => {
  pokemon.set.find('').then((set) => {
    console.log(set)
  })
}

const getCard = async () => {
  pokemon.card.find('base1-4').then((card) => {
    console.log(card)
  })
}

const filterByQ = async () => {
  pokemon.card.where({ q: 'name:blastoise' }).then((result) => {
    console.log(result.data[0].name) // "Blastoise"
  })
}

const Home = () => {
  return (
    <div className="d-flex flex-column">
      <button onClick={getAllSet}> Get all set</button>
      <button onClick={getCard}> Get a single card by ID</button>
      <button onClick={filterByQ}> Filter cards via the q parameter</button>
    </div>
  )
}

export default Home

/* eslint-disable space-before-function-paren */
import React from 'react'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

const getAllSet = async () => {
  pokemon.set.find('').then((set) => {
    console.log(set)
  })
}

const getCardById = async () => {
  pokemon.card.find('base1-4').then((card) => {
    console.log(card)
  })
}

const getCardByName = async () => {
  pokemon.card.where({ q: 'name:blastoise' }).then((result) => {
    console.log(result.data) // "Blastoise"
  })
}

const filterByQ = async () => {
  pokemon.card
    .where({ q: 'hp:[* TO 5000]', pageSize: 5, page: 2 })
    .then((result) => {
      console.log(result)
    })
}

const pageTrough = async () => {
  pokemon.set.all({ q: 'series:base' }).then((cards) => {
    console.log(cards[0].name) // "Base"
  })
}

const getSupertype = async () => {
  pokemon.supertype.all().then((cards) => {
    console.log(cards)
  })
}

const getSubtype = async () => {
  pokemon.subtype.all().then((cards) => {
    console.log(cards)
  })
}

const getType = async () => {
  pokemon.type.all().then((cards) => {
    console.log(cards)
  })
}

const getRarity = async () => {
  pokemon.rarity.all().then((cards) => {
    console.log(cards)
  })
}

const Test = () => {
  return (
    <div>
      <div className="d-flex">
        <button onClick={getAllSet}> Get all set</button>
        <button onClick={getCardById}> Get a single card by ID</button>
        <button onClick={getCardByName}> Get cards by name</button>
        <button onClick={filterByQ}> Filter cards via the q parameter</button>
        <button onClick={pageTrough}>
          Automatically page through card data
        </button>
      </div>
      <br />
      <div>
        <button onClick={getSupertype}> supertype</button>
        <button onClick={getSubtype}> subtype</button>
        <button onClick={getType}> type</button>
        <button onClick={getRarity}> rarity</button>
      </div>
    </div>
  )
}

export default Test

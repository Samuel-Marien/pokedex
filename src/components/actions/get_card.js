/* eslint-disable space-before-function-paren */
import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

const getCardByName = async (name) => {
  pokemon.card.where({ q: `name:${name}*` }).then((result) => {
    // console.log(result)
    return result
  })
}

export default getCardByName

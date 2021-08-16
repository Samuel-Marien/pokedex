import React from 'react'

const stringToIcon = (string) => {
  switch (string) {
    case 'Darkness':
      return <img src="/images/Darkness.png" style={{ width: '25px' }} />
    case 'Dragon':
      return <img src="/images/Dragon.png" style={{ width: '25px' }} />
    case 'Lightning':
      return <img src="/images/Electric.png" style={{ width: '25px' }} />
    case 'Fairy':
      return <img src="/images/Fairy.png" style={{ width: '25px' }} />
    case 'Fighting':
      return <img src="/images/Fighting.png" style={{ width: '25px' }} />
    case 'Fire':
      return <img src="/images/Fire.png" style={{ width: '25px' }} />
    case 'Grass':
      return <img src="/images/Grass.png" style={{ width: '25px' }} />
    case 'Psychic':
      return <img src="/images/Psy.png" style={{ width: '25px' }} />
    case 'Metal':
      return <img src="/images/Metal.png" style={{ width: '25px' }} />
    case 'Water':
      return <img src="/images/Water.png" style={{ width: '25px' }} />
    case 'Colorless':
      return <img src="/images/Colorless.png" style={{ width: '25px' }} />
    default:
      console.log('error dude!')
      break
  }
}

export const subtypeArray = [
  'BREAK',
  'Baby',
  'Basic',
  'EX',
  'GX',
  'Goldenrod', //Goldenrod Game Corner
  'Item',
  'LEGEND',
  'Level-Up',
  'MEGA',
  'Tool', // Pokémon Tool
  'F', //Pokémon Tool F
  'Rapid', //'Rapid Strike'
  'Restored',
  'Rocket', //Rocket's Secret Machine
  'Single', //single strike
  'Special',
  'Stadium',
  'Stage', // probleme ici
  'Stage 2', //probleme ici
  'Supporter',
  'TAG', //TAG TEAM
  'Technical', //Technical Machine
  'V',
  'VMAX'
]

export const typesArray = [
  'Darkness',
  'Dragon',
  'Lightning',
  'Fairy',
  'Fighting',
  'Fire',
  'Grass',
  'Psychic',
  'Metal',
  'Water',
  'Colorless'
]

export default stringToIcon

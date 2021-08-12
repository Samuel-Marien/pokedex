import React from 'react'

const stringToIcon = (string) => {
  switch (string) {
    case 'Darkness':
      return <img src="/images/darkness.png" style={{ width: '25px' }} />
    case 'Dragon':
      return <img src="/images/dragon.png" style={{ width: '25px' }} />
    case 'Lightning':
      return <img src="/images/electric.png" style={{ width: '25px' }} />
    case 'Fairy':
      return <img src="/images/fairy.png" style={{ width: '25px' }} />
    case 'Fighting':
      return <img src="/images/fighting.png" style={{ width: '25px' }} />
    case 'Fire':
      return <img src="/images/fire.png" style={{ width: '25px' }} />
    case 'Grass':
      return <img src="/images/grass.png" style={{ width: '25px' }} />
    case 'Psychic':
      return <img src="/images/psy.png" style={{ width: '25px' }} />
    case 'Metal':
      return <img src="/images/metal.png" style={{ width: '25px' }} />
    case 'Water':
      return <img src="/images/water.png" style={{ width: '25px' }} />
    case 'Colorless':
      return <img src="/images/colorless.png" style={{ width: '25px' }} />
    default:
      console.log('error dude!')
      break
  }
}

export const subtypeArray = [
  'BREAK',
  'Baby',
  'Basic',
  'Ex',
  'GX',
  'Goldenrod Game Corner',
  'Item',
  'LEGEND',
  'Level-Up',
  'MEGA',
  'Pokémon tool',
  'Pokémon Tool F',
  'Rapid Strike',
  'Restored',
  "Rocket's Secret Machine",
  'Single Strike',
  'Special',
  'Stadium',
  'Stage 1',
  'Stage 2',
  'Supporter',
  'TAG TEAM',
  'Technical Machine',
  'V',
  'VMAX'
]

export default stringToIcon

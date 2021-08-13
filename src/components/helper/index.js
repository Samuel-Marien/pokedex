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

export default stringToIcon

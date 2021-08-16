import React from 'react'

const stringToIcon = (string) => {
  switch (string) {
    case 'Darkness':
      return <img src="/images/Darkness.png" style={{ width: '25px' }} />
    case 'Dragon':
      return <img src="/images/Dragon.png" style={{ width: '25px' }} />
    case 'Lightning':
      return <img src="/images/Lightning.png" style={{ width: '25px' }} />
    case 'Fairy':
      return <img src="/images/Fairy.png" style={{ width: '25px' }} />
    case 'Fighting':
      return <img src="/images/Fighting.png" style={{ width: '25px' }} />
    case 'Fire':
      return <img src="/images/Fire.png" style={{ width: '25px' }} />
    case 'Grass':
      return <img src="/images/Grass.png" style={{ width: '25px' }} />
    case 'Psychic':
      return <img src="/images/Psychic.png" style={{ width: '25px' }} />
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

export default stringToIcon

import React from 'react'

import { ReactComponent as Bug } from '../../images/Pokémon_Bug_Type_Icon.svg'
import { ReactComponent as Dark } from '../../images/Pokémon_Dark_Type_Icon.svg'
import { ReactComponent as Dragon } from '../../images/Pokémon_Dragon_Type_Icon.svg'
import { ReactComponent as Electric } from '../../images/Pokémon_Electric_Type_Icon.svg'
import { ReactComponent as Fairy } from '../../images/Pokémon_Fairy_Type_Icon.svg'
import { ReactComponent as Fighting } from '../../images/Pokémon_Fighting_Type_Icon.svg'
import { ReactComponent as Fire } from '../../images/Pokémon_Fire_Type_Icon.svg'
import { ReactComponent as Flying } from '../../images/Pokémon_Flying_Type_Icon.svg'
import { ReactComponent as Ghost } from '../../images/Pokémon_Ghost_Type_Icon.svg'
import { ReactComponent as Grass } from '../../images/Pokémon_Grass_Type_Icon.svg'
import { ReactComponent as Ground } from '../../images/Pokémon_Ground_Type_Icon.svg'
import { ReactComponent as Ice } from '../../images/Pokémon_Ice_Type_Icon.svg'
import { ReactComponent as Normal } from '../../images/Pokémon_Normal_Type_Icon.svg'
import { ReactComponent as Poison } from '../../images/Pokémon_Poison_Type_Icon.svg'
import { ReactComponent as Psychic } from '../../images/Pokémon_Psychic_Type_Icon.svg'
import { ReactComponent as Rock } from '../../images/Pokémon_Rock_Type_Icon.svg'
import { ReactComponent as Steel } from '../../images/Pokémon_Steel_Type_Icon.svg'
import { ReactComponent as Water } from '../../images/Pokémon_Water_Type_Icon.svg'

const stringToIcon = (string) => {
  switch (string) {
    case 'Colorless':
      return <Normal style={{ width: '25px' }} />
    case 'Bug':
      return <Bug style={{ width: '25px' }} />
    case 'Darkness':
      return <Dark style={{ width: '25px' }} />
    case 'Dragon':
      return <Dragon style={{ width: '25px' }} />
    case 'Lightning':
      return <Electric style={{ width: '25px' }} />
    case 'Fairy':
      return <Fairy style={{ width: '25px' }} />
    case 'Fighting':
      return <Fighting style={{ width: '25px' }} />
    case 'Fire':
      return <Fire style={{ width: '25px' }} />
    case 'Flying':
      return <Flying style={{ width: '25px' }} />
    case 'Ghost':
      return <Ghost style={{ width: '25px' }} />
    case 'Grass':
      return <Grass style={{ width: '25px' }} />
    case 'Ground':
      return <Ground style={{ width: '25px' }} />
    case 'Ice':
      return <Ice style={{ width: '25px' }} />
    case 'Normal':
      return <Normal style={{ width: '25px' }} />
    case 'Poison':
      return <Poison style={{ width: '25px' }} />
    case 'Psychic':
      return <Psychic style={{ width: '25px' }} />
    case 'Rock':
      return <Rock style={{ width: '25px' }} />
    case 'Metal':
      return <Steel style={{ width: '25px' }} />
    case 'Water':
      return <Water style={{ width: '25px' }} />
    default:
      console.log('error dude!')
      break
  }
}

export default stringToIcon

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
      return <Normal className="col-3" />
    case 'Bug':
      return <Bug className="col-3" />
    case 'Darkness':
      return <Dark className="col-3" />
    case 'Dragon':
      return <Dragon className="col-3" />
    case 'Lightning':
      return <Electric className="col-3" />
    case 'Fairy':
      return <Fairy className="col-3" />
    case 'Fighting':
      return <Fighting className="col-3" />
    case 'Fire':
      return <Fire className="col-3" />
    case 'Flying':
      return <Flying className="col-3" />
    case 'Ghost':
      return <Ghost className="col-3" />
    case 'Grass':
      return <Grass className="col-3" />
    case 'Ground':
      return <Ground className="col-3" />
    case 'Ice':
      return <Ice className="col-3" />
    case 'Normal':
      return <Normal className="col-3" />
    case 'Poison':
      return <Poison className="col-3" />
    case 'Psychic':
      return <Psychic className="col-3" />
    case 'Rock':
      return <Rock className="col-3" />
    case 'Metal':
      return <Steel className="col-3" />
    case 'Water':
      return <Water className="col-3" />
    default:
      console.log('error dude!')
      break
  }
}

export default stringToIcon

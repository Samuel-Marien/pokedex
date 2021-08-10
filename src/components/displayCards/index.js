import React from 'react'
import { Link } from 'react-router-dom'

const displayCards = (props) => {
  const { index, item } = props
  return (
    <div key={index} id={item.id}>
      <Link to="/details">
        <img
          src={item.images.small}
          role="button"
          className="mt-3 my_radius shadow card_effect"
          id={item.id}
        />
      </Link>
    </div>
  )
}

export default displayCards

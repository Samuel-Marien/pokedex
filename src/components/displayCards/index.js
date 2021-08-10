import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const DisplayCards = (props) => {
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

DisplayCards.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
}

export default DisplayCards

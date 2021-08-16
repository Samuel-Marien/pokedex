import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Context from '../context'

import stringToIcon from '../../misc/stringToIcon'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

const DisplayList = (props) => {
  const { index, item } = props
  const { setCardDetail } = useContext(Context)
  const { isDark } = useContext(Context)

  const renderTooltip = (src, ...props) => <img {...props} src={src} />

  const handleClick = (e) => {
    e.preventDefault()
    setCardDetail(() => e.target.id)
  }

  return (
    <div
      className="list-group list-group-flush"
      key={index}
      id={item.id}
      onClick={handleClick}
    >
      <OverlayTrigger
        placement="auto"
        overlay={renderTooltip(item.images.small)}
        transition={false}
      >
        <Link to="/details" className="text-decoration-none">
          <div
            id={item.id}
            className={
              isDark
                ? 'bg-light text-dark list-group-item list-group-item-action p-1'
                : 'bg-dark text-light list-group-item list-group-item-action p-1'
            }
          >
            <div
              className="row px-2"
              id={item.id}
              style={{ fontSize: '.9rem' }}
            >
              <div className="col d-none d-lg-block" id={item.id}>
                {item.set.name}
              </div>
              <div className="col d-none d-lg-block" id={item.id}>
                {item.number}
              </div>
              <div className="col" id={item.id}>
                {item.name}
              </div>
              <div className="col" id={item.id}>
                {item.rarity ? item.rarity : null}
              </div>
              <div className="col d-none d-lg-block" id={item.id}>
                {item.types ? <div>{stringToIcon(item.types[0])}</div> : '_'}
              </div>

              <div className="col d-none d-lg-block" id={item.id}>
                {item.supertype ? item.supertype : null}
              </div>
              <div className="col" id={item.id}>
                {/* {item.subtypes ? item.subtypes : null} */}
                {item.subtypes
                  ? item.subtypes.map((elem, index) => {
                      return <div key={index}>{elem}</div>
                    })
                  : null}
              </div>
              {/* PRICES SECTION  */}
              <div className="col" id={item.id}>
                {item.tcgplayer && item.tcgplayer.prices.normal ? (
                  <div className="text-primary" id={item.id}>
                    {item.tcgplayer.prices.normal.market}
                  </div>
                ) : null}
                {item.tcgplayer && item.tcgplayer.prices.holofoil ? (
                  <div className="text-primary" id={item.id}>
                    {item.tcgplayer.prices.holofoil.market}
                  </div>
                ) : null}
                {item.tcgplayer &&
                item.tcgplayer.prices['1stEditionHolofoil'] ? (
                  <div className="text-primary" id={item.id}>
                    {
                      <p id={item.id}>
                        {item.tcgplayer.prices['1stEditionHolofoil'].market}
                      </p>
                    }
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </Link>
      </OverlayTrigger>
    </div>
  )
}

DisplayList.propTypes = {
  index: PropTypes.number,
  item: PropTypes.object
}

export default DisplayList

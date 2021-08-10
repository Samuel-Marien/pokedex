import React from 'react'

const listTitles = () => {
  return (
    <div className="row border-bottom border-secondary pb-2 mb-2 px-4 fw-bold">
      <div className="col d-none d-lg-block">Set</div>
      <div className="col d-none d-lg-block">No</div>
      <div className="col">Name</div>
      <div className="col">Rarity</div>
      <div className="col d-none d-lg-block">Types</div>
      <div className="col d-none d-lg-block">Supertype</div>
      <div className="col">Subtypes</div>
      <div className="col">Price</div>
    </div>
  )
}

export default listTitles

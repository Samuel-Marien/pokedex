import React from 'react'

import Spinner from 'react-bootstrap/Spinner'

const MySpinner = () => {
  return (
    <div className="mx-auto mt-5">
      <Spinner animation="grow" variant="warning" />
    </div>
  )
}

export default MySpinner

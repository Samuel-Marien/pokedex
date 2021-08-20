import React, { useEffect, useState } from 'react'

import Spinner from 'react-bootstrap/Spinner'

const MySpinner = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((count) => count + 1)
    }, 1000)
    if (timer > 20) {
      return () => clearInterval(interval)
    }
  }, [setTimer])

  return (
    <div className="mx-auto my-5" style={{ height: '100vh' }}>
      {timer > 19 ? (
        <p>
          Bad Request. Your request is either malformed, or is missing one or
          more required fields.
        </p>
      ) : (
        <Spinner animation="grow" variant="warning" />
      )}
    </div>
  )
}

export default MySpinner

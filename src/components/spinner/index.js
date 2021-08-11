import React, { useEffect, useState } from 'react'

import Spinner from 'react-bootstrap/Spinner'

const MySpinner = () => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((count) => count + 1)
    }, 1000)
    if (timer > 6) {
      return () => clearInterval(interval)
    }
  }, [setTimer])

  return (
    <div className="mx-auto my-5" style={{ height: '100vh' }}>
      {timer > 5 ? <p>plop</p> : <Spinner animation="grow" variant="warning" />}
    </div>
  )
}

export default MySpinner

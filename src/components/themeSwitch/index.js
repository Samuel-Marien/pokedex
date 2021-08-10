import React, { useContext } from 'react'

import Context from '../context'

import Navbar from 'react-bootstrap/Navbar'

import { GiMoon } from 'react-icons/gi'
import { BsSun } from 'react-icons/bs'

const SwitchButton = () => {
  const { isDark, setIsDark } = useContext(Context)

  const handleDark = (e) => {
    e.preventDefault()
    if (isDark) {
      setIsDark(false)
    } else {
      setIsDark(true)
    }
  }

  return (
    <Navbar.Text
      role="button"
      onClick={handleDark}
      className="d-flex align-items-center"
    >
      {isDark === true ? (
        <div className="d-flex align-items-center">
          <GiMoon /> <span className="ms-1">Dark</span>
        </div>
      ) : (
        <div className="d-flex align-items-center">
          <BsSun /> <span className="ms-1">Light</span>
        </div>
      )}
    </Navbar.Text>
  )
}

export default SwitchButton

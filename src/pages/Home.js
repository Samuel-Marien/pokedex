import React, { useContext } from 'react'

import Context from '../components/context'
import SearchCard from '../components/search_bar'
import MyNavBar from '../components/navbar'

import urlLightImage from '../images/poke-bg.jpg'
import urlDarkImage from '../images/blacktheme_bg.jpg'

const Home = () => {
  const { isDark } = useContext(Context)

  return (
    <div
      className="darkEffect"
      style={{
        background: `url(${isDark ? urlLightImage : urlDarkImage}) center top`,
        height: '100vh'
      }}
    >
      <MyNavBar />
      <SearchCard />
    </div>
  )
}

export default Home

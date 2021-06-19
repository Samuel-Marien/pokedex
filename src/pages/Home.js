import React from 'react'

import SearchCard from '../components/search_bar'
import MyNavBar from '../components/navbar'

import urlImage from '../images/poke-bg.jpg'

const Home = () => {
  return (
    <div
      style={{
        background: `url(${urlImage}) center top`,
        height: '100vh'
      }}
    >
      <MyNavBar />
      <SearchCard />
    </div>
  )
}

export default Home

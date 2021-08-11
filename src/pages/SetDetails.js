/* eslint-disable space-before-function-paren */
import React, { useContext, useEffect, useState } from 'react'

import Context from '../components/context/'
import SuperSearchBar from '../components/super_search_bar'
import MySpinner from '../components/spinner'
import MyNavBar from '../components/navbar'
import MyInput from '../components/myInput'
import ListTitles from '../components/listTitles'
import DisplayCards from '../components/displayCards'
import DisplayList from '../components/displayList'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

const SetDetails = () => {
  const { setDetail } = useContext(Context)
  const { setCardDetail } = useContext(Context)
  const { myDropViewTitle } = useContext(Context)
  const [data, setData] = useState('')
  const [title, setTitle] = useState('')
  const { myDropOrderTitle } = useContext(Context)
  const { isDark } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      pokemon.card.where({ q: `set.id:${setDetail}` }).then((result) => {
        setTitle(result.data[0].set.name)
        setData(result.data)
      })
    }
    fetchData()
  }, [setData])

  const handleClick = (e) => {
    e.preventDefault()
    setCardDetail(() => e.target.id)
  }

  return (
    <div className={isDark ? 'bg-light' : 'bg-dark'}>
      <MyNavBar>
        <MyInput />
      </MyNavBar>
      <SuperSearchBar title={title} id={setDetail} />
      {/* IMAGES DISPLAY  */}
      {myDropViewTitle === 'Images' ? (
        <div
          className="container d-flex flex-wrap justify-content-center justify-content-md-between"
          onClick={handleClick}
        >
          {myDropOrderTitle === 'Asc' ? (
            data ? (
              data
                .map((item, index) => {
                  return <DisplayCards item={item} key={index} />
                })
                .reverse()
            ) : (
              <MySpinner />
            )
          ) : data ? (
            data.map((item, index) => {
              return <DisplayCards item={item} key={index} />
            })
          ) : (
            <MySpinner />
          )}
        </div>
      ) : (
        // LIST DISPLAY
        <div className="container">
          <ListTitles />
          {myDropOrderTitle === 'Asc' ? (
            data ? (
              data
                .map((item, index) => {
                  return <DisplayList item={item} key={index} />
                })
                .reverse()
            ) : (
              <MySpinner />
            )
          ) : data ? (
            data.map((item, index) => {
              return <DisplayList item={item} key={index} />
            })
          ) : (
            <MySpinner />
          )}
        </div>
      )}
    </div>
  )
}

export default SetDetails

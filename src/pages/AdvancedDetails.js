import React, { useContext } from 'react'

import Context from '../components/context'
import MyNavBar from '../components/navbar'
import MyInput from '../components/myInput'
import DisplayCards from '../components/displayCards'
import DisplayList from '../components/displayList'
import MySpinner from '../components/spinner'
import SuperSearchBar from '../components/super_search_bar'
import ListTitles from '../components/listTitles'

const AdvancedDetails = () => {
  const { advancedData } = useContext(Context)
  const { isDark } = useContext(Context)
  const { myDropViewTitle } = useContext(Context)
  const { myDropOrderTitle } = useContext(Context)
  const { setCardDetail } = useContext(Context)

  const handleClick = (e) => {
    e.preventDefault()
    setCardDetail(() => e.target.id)
  }

  return (
    <div
      className={isDark ? 'bg-light' : 'bg-dark'}
      style={{ height: '100vh' }}
    >
      <MyNavBar>
        <MyInput />
      </MyNavBar>
      <SuperSearchBar />
      {/* IMAGES DISPLAY  */}
      {myDropViewTitle === 'Images' ? (
        <div
          className="container d-flex flex-wrap justify-content-center justify-content-md-between"
          onClick={handleClick}
        >
          {myDropOrderTitle === 'Asc' ? (
            advancedData.length > 0 ? (
              advancedData
                .map((item, index) => {
                  return <DisplayCards item={item} key={index} />
                })
                .reverse()
            ) : (
              <div className="container d-flex flex-wrap justify-content-center justify-content-md-between">
                <MySpinner />
              </div>
            )
          ) : advancedData.length > 0 ? (
            advancedData.map((item, index) => {
              return <DisplayCards item={item} key={index} />
            })
          ) : (
            <div className="container d-flex flex-wrap justify-content-center justify-content-md-between">
              <MySpinner />
            </div>
          )}
        </div>
      ) : (
        // LIST DISPLAY
        <div className="container">
          <ListTitles />
          {myDropOrderTitle === 'Asc' ? (
            advancedData.length > 0 ? (
              advancedData
                .map((item, index) => {
                  return <DisplayList item={item} key={index} />
                })
                .reverse()
            ) : (
              <div className="container d-flex flex-wrap justify-content-center justify-content-md-between">
                <MySpinner />
              </div>
            )
          ) : advancedData.length > 0 ? (
            advancedData.map((item, index) => {
              return <DisplayList item={item} key={index} />
            })
          ) : (
            <div className="container d-flex flex-wrap justify-content-center justify-content-md-between">
              <MySpinner />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default AdvancedDetails

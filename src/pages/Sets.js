/* eslint-disable space-before-function-paren */
import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import Context from '../components/context'
import MySpinner from '../components/spinner'
import MyInput from '../components/myInput'

import Card from 'react-bootstrap/Card'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import MyNavBar from '../components/navbar'

const Sets = () => {
  const [data, setData] = useState('')
  const { setSetDetail } = useContext(Context)

  useEffect(() => {
    const fetchData = async () => {
      pokemon.set.find('').then((set) => {
        setData(set)
      })
    }
    fetchData()
  }, [setData])

  const handleClick = (e) => {
    e.preventDefault()
    setSetDetail(() => e.target.id)
  }

  return (
    <div>
      <MyNavBar>
        <MyInput />
      </MyNavBar>
      <div className="container d-flex flex-wrap justify-content-between">
        {data ? (
          data
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  style={{ width: '18rem' }}
                  className=" shadow mt-3 text-center card_effect"
                  onClick={handleClick}
                  id={item.id}
                >
                  <Card.Header className="p-2 d-flex justify-content-around">
                    <span style={{ fontSize: '.8rem' }}>
                      Serie: {item.series}
                    </span>
                    <span style={{ fontSize: '.8rem' }}>
                      Printed total: {item.printedTotal}
                    </span>

                    <img src={item.images.symbol} className="col-1" />
                  </Card.Header>
                  <Link to="/set_details">
                    <div style={{ width: '14rem' }} className="mx-auto mt-4">
                      <Card.Img
                        variant="top"
                        src={item.images.logo}
                        id={item.id}
                        style={{ width: '10rem' }}
                      />
                    </div>
                  </Link>

                  <Card.Body className="d-flex flex-column justify-content-end pb-1">
                    <div className="d-flex justify-content-center">
                      <Card.Title>{item.name}</Card.Title>
                    </div>
                    <Card.Text className="text-secondary">
                      {item.legalities.expanded ? (
                        <p className="p-0 m-0">
                          Expanded {item.legalities.expanded}
                        </p>
                      ) : null}

                      {item.legalities.standard ? (
                        <p className="p-0 m-0">
                          Standard {item.legalities.standard}
                        </p>
                      ) : null}
                    </Card.Text>
                    <footer
                      style={{ fontSize: '.8rem' }}
                      className="text-secondary"
                    >
                      Released {item.releaseDate}
                    </footer>
                  </Card.Body>
                </Card>
              )
            })
            .reverse()
        ) : (
          <MySpinner />
        )}
      </div>
    </div>
  )
}

export default Sets

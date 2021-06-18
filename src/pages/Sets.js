/* eslint-disable space-before-function-paren */
import React, { useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card'

import pokemon from 'pokemontcgsdk'
pokemon.configure({ apiKey: '1bc96399-f62e-4230-98e4-f7ad9d51212b' })

import MyNavBar from '../components/navbar'

const Sets = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      pokemon.set.find('').then((set) => {
        console.log(set)
        setData(set)
      })
    }
    fetchData()
  }, [setData])

  console.log(data)

  return (
    <div>
      <MyNavBar />
      <div className="container d-flex flex-wrap justify-content-between">
        {data ? (
          data.map((item, index) => {
            return (
              <Card
                key={index}
                style={{ width: '18rem' }}
                className=" shadow mt-3 text-center"
                role="button"
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

                <div style={{ width: '14rem' }} className="mx-auto mt-4">
                  <Card.Img
                    variant="top"
                    src={item.images.logo}
                    style={{ width: '10rem' }}
                  />
                </div>

                <Card.Body className="d-flex flex-column justify-content-end pb-1">
                  <div className="d-flex justify-content-center">
                    <Card.Title>{item.name}</Card.Title>
                  </div>

                  <Card.Text className="text-secondary">
                    <p className="p-0 m-0">
                      {item.legalities.expanded
                        ? `Expanded ${item.legalities.expanded}`
                        : null}
                    </p>
                    <p className="p-0 m-0">
                      {item.legalities.standard
                        ? `Standard ${item.legalities.standard}`
                        : null}
                    </p>
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
        ) : (
          <p>Ceci n&apos;est pas un spinner...</p>
        )}
      </div>
    </div>
  )
}

export default Sets

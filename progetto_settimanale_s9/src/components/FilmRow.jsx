import { useEffect, useState } from 'react'
import { Row, Col, Card, Spinner, Alert } from 'react-bootstrap'

const FilmRow = function ({ filmName, titleRow }) {
  const [arrFilm, setArrFilm] = useState([])
  const [loading, setLoading] = useState([])

  const getFilm = function () {
    const filmURL = 'https://www.omdbapi.com/?apikey=da26c35d&s='
    fetch(filmURL + filmName)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        // console.log(data.Search)

        setArrFilm(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
        setLoading(false)
      })
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getFilm, [])

  return (
    <Row className="text-light px-4">
      <Col xs={12} className="p-0">
        <h3>{titleRow}</h3>
      </Col>
      <Col xs={12} className="p-0 mt-3 mb-5">
        <Row className="g-3">
          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="light" />
            </div>
          )}
          {arrFilm.slice(0, 6).map((film) => {
            return (
              <Col xs={12} sm={6} md={4} lg={2} key={film.imdbID}>
                <Card className="h-100 border border-1 border-secondary bg-transparent overflow-hidden rounded-0">
                  <div className="overflow-hidden h-75">
                    <img src={film.Poster} alt="Film" className="w-100" />
                  </div>
                  <Card.Body className="text-light d-flex flex-column justify-content-center">
                    <Card.Title className="text-truncate">
                      {film.Title}
                    </Card.Title>
                    <Card.Text>{film.Year}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Col>
    </Row>
  )
}

export default FilmRow

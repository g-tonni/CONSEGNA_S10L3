import { useEffect, useState } from 'react'
import { Row, Col, Card, Spinner, Alert, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FilmCarousel = function ({ filmName, titleRow }) {
  const [arrFilm, setArrFilm] = useState([])
  const [arrFilm2, setArrFilm2] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

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
        setError(true)
      })
  }

  const getFilm2 = function () {
    const filmURL = 'https://www.omdbapi.com/?apikey=da26c35d&s='
    fetch(filmURL + filmName + '&page=2')
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        // console.log(data.Search)

        setArrFilm2(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
        setLoading(false)
        setError(true)
      })
  }

  useEffect(() => {
    getFilm()
    getFilm2()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Row className="text-light px-4">
      <Col xs={12} className="p-0">
        <h3>{titleRow}</h3>
      </Col>
      <Col xs={12} className="p-0 mt-3 mb-5">
        <Carousel indicators={false} interval={null}>
          <Carousel.Item>
            <Row className="g-3">
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="light" />
                </div>
              )}
              {error && (
                <Alert className="bg-danger bg-opacity-50 text-light border border-1 border-danger">
                  Errore nel caricamento delle risorse
                </Alert>
              )}
              {arrFilm.slice(0, 6).map((film) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={2} key={film.imdbID}>
                    <Link to={'/details/' + film.imdbID}>
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
                    </Link>
                  </Col>
                )
              })}
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="g-3">
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="light" />
                </div>
              )}
              {error && (
                <Alert className="bg-danger bg-opacity-50 text-light border border-1 border-danger">
                  Errore nel caricamento delle risorse
                </Alert>
              )}
              {arrFilm2.slice(0, 6).map((film) => {
                return (
                  <Col xs={12} sm={6} md={4} lg={2} key={film.imdbID}>
                    <Link to={'/details/' + film.imdbID}>
                      <Card className="h-100 border border-1 border-secondary bg-transparent overflow-hidden rounded-0">
                        <div className="overflow-hidden h-75">
                          <img
                            src={film.Poster}
                            onError={(e) => {
                              e.currentTarget.src =
                                'https://placecats.com/300/450'
                            }}
                            alt="Film"
                            className="w-100"
                          />
                        </div>
                        <Card.Body className="text-light d-flex flex-column justify-content-center">
                          <Card.Title className="text-truncate">
                            {film.Title}
                          </Card.Title>
                          <Card.Text>{film.Year}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                )
              })}
            </Row>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  )
}

export default FilmCarousel

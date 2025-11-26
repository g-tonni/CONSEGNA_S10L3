import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  Spinner,
} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TVShows from './TVShows'

const Search = function () {
  const [search, setSearch] = useState('movie')
  const [arrFilm, setArrFilm] = useState([])
  const [loading, setLoading] = useState(true)

  const getFilm = function (value) {
    const filmURL = 'https://www.omdbapi.com/?apikey=da26c35d&s='
    fetch(filmURL + value)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        console.log(data.Search)

        setArrFilm(data.Search)
        setLoading(false)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getFilm(search)
  }, [search])

  return (
    <>
      <Container fluid className="bg-dark text-light">
        <TVShows title="TV Shows" />
        <Row className="justify-content-center pb-5 pt-4">
          <Col xs={12} md={6}>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Cerca"
                className="bg-dark text-light me-3"
                onChange={(e) => {
                  setSearch(e.target.value)
                }}
              />
              <Button variant="outline-light" type="submit">
                CERCA
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="g-3">
          {loading && (
            <div className="text-center">
              <Spinner animation="border" variant="light" />
            </div>
          )}
          {arrFilm ? (
            arrFilm.map((film) => {
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
            })
          ) : (
            <div>
              <h1
                className="text-center"
                style={{ paddingTop: 250, paddingBottom: 250 }}
              >
                OOPS! <br /> Non ci sono risultati per la tua ricerca!
              </h1>
            </div>
          )}
        </Row>
      </Container>
    </>
  )
}

export default Search

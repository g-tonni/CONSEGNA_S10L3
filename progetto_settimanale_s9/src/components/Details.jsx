import { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import CommentList from './CommentList'
import AddComment from './AddComment'

const Details = function () {
  const singleFilmURL = 'https://www.omdbapi.com/?apikey=da26c35d&i='

  const navigate = useNavigate()
  const [film, setFilm] = useState({})
  const params = useParams()

  const getSingleFilm = function () {
    fetch(singleFilmURL + params.filmID)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        console.log(data)
        setFilm(data)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  useEffect(() => {
    getSingleFilm()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container fluid className="bg-dark text-light pt-4">
      <Row className="py-5">
        <Col xs={12}>
          <Container>
            <Row className="py-5">
              <Col xs={12} md={6}>
                <img
                  src={film.Poster}
                  onError={(e) => {
                    e.currentTarget.src = 'https://placecats.com/500/650'
                  }}
                  alt="Gattino"
                  className="w-100"
                />
              </Col>
              <Col
                xs={12}
                md={6}
                className="d-flex flex-column justify-content-center align-items-start"
              >
                <p>{film.Awards}</p>
                <h1 className="pb-4">{film.Title}</h1>
                <p className="pb-5 fs-5">{film.Plot}</p>
                <p>
                  <span className="fw-bold">Runtime:</span> {film.Runtime}
                </p>
                <p>
                  <span className="fw-bold">Actors:</span> {film.Actors}
                </p>
                <p>
                  <span className="fw-bold">Genre:</span> {film.Genre}
                </p>
                <p className="pb-5">
                  <span className="fw-bold">Released in:</span> {film.Released}
                </p>

                <Button
                  variant="outline-light p-2"
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  TORNA IN HOME
                </Button>
              </Col>
              <Col className="pt-5">
                <CommentList params={params.filmID} />
                <AddComment filmId={params.filmID} />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Details

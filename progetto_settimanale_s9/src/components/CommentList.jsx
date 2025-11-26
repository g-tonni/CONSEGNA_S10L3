import { ListGroup } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const CommentList = function ({ params }) {
  const commentsURL = 'https://striveschool-api.herokuapp.com/api/comments/'

  const [comments, setComments] = useState([])

  const getComments = function () {
    fetch(commentsURL + params, {
      method: 'GET',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTI3MWFmYjUwZTExNzAwMTVkMWM2NzQiLCJpYXQiOjE3NjQxNzA0OTEsImV4cCI6MTc2NTM4MDA5MX0.rqaNq5q8oNZltXqs3FKyb7YQ4LOuywKL7zQt_Ytpju0',
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('ERRORE NELLA RESPONSE: ', res.status)
        }
      })
      .then((data) => {
        // console.log('COMMENTI', data)
        setComments(data)
      })
      .catch((err) => {
        console.log('ERRORE: ', err)
      })
  }

  useEffect(() => {
    getComments()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <h3 className="pb-3">Recensioni</h3>

      {comments.length > 0 ? (
        <ListGroup className="pb-5">
          {comments.map((comment) => {
            return (
              <ListGroup.Item
                key={comment._id}
                className="bg-dark text-light rounded-0 d-flex justify-content-between"
              >
                <span>{comment.comment}</span>
                <span>{comment.rate}/5</span>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      ) : (
        <div className="border border-1 border-light p-4 mb-5">
          <p className="m-0">
            OOPS! <br /> Non ci sono recensioni per questo film
          </p>
        </div>
      )}
    </>
  )
}

export default CommentList

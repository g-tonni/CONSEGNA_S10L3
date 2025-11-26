import { Container, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NotFound = function () {
  const navigate = useNavigate()

  return (
    <Container fluid className="bg-dark text-light">
      <Row
        className="justify-content-center"
        style={{ paddingTop: 300, paddingBottom: 300 }}
      >
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h1 className="text-center pb-4">
            OPS! <br /> Non abbiamo trovato quello che cercavi
          </h1>
          <Button
            variant="outline-light p-3 fs-5"
            onClick={() => {
              navigate('/')
            }}
          >
            TORNA IN HOME
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound

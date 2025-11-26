import { Component } from 'react'
import NetflixNavbar from './NetflixNavbar'
import NetflixFooter from './NetflixFooter'
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  Button,
} from 'react-bootstrap'
import avatar from '../assets/avatar.png'

class Login extends Component {
  render() {
    return (
      <>
        <NetflixNavbar activeLink="Edit" />
        <Container fluid className="pt-4 pb-5 bg-dark text-light px-3 px-md-0">
          <Row className="justify-content-center pt-5">
            <Col xs={12} md={8}>
              <h1 className="fs-0">Edit Profile</h1>
              <hr />
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={3}>
                  <div className="position-relative mb-4 m-md-0">
                    <img src={avatar} alt="Avatar" className="img-fluid" />
                    <a
                      href="#"
                      className="position-absolute start-0 bottom-0 m-2 text-light fs-3"
                    >
                      <i className="bi bi-pencil-square m-0"></i>
                    </a>
                  </div>
                </Col>
                <Col xs={12} md={9}>
                  <Row>
                    <Col xs={12}>
                      <h4 className="fs-5">Username:</h4>
                      <Form.Control
                        type="Text"
                        placeholder="Strive Student"
                        className="w-100 border-0 p-2 bg-secondary text-light mb-4 rounded-0"
                        required
                      />
                      <h4 className="fs-5">Language:</h4>
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="outline-light"
                          id="dropdown-basic"
                        >
                          English
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Spanish
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            French
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Italian
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <hr className="my-4" />
                    </Col>
                    <Col xs={12}>
                      <h4 className="fs-5">Maturity Settings:</h4>
                      <Button variant="secondary" className="mb-4">
                        ALL MATURITY RATINGS
                      </Button>
                      <h5 className="fs-6">
                        Show titles of all maturity ratings for this profile.
                      </h5>
                      <Button
                        variant="outline-light"
                        className="mb-4 py-2 px-4"
                      >
                        EDIT
                      </Button>
                      <hr className="my-4" />
                    </Col>
                    <Col xs={12}>
                      <h4 className="fs-5">Autoplay controls:</h4>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check
                            type="checkbox"
                            label="Autoplay next episode in a series on all devices."
                          />
                          <Form.Check
                            type="checkbox"
                            label="Autoplay previews while browsing on all devices."
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={8}>
              <hr className="border border-1 border-secondary my-4" />
              <div className="d-flex justify-content-between">
                <Button variant="light" className="flex-grow-1 me-3">
                  SAVE
                </Button>
                <Button
                  variant="outline-secondary"
                  className="flex-grow-1 me-3"
                >
                  CANCEL
                </Button>
                <Button variant="outline-secondary" className="flex-grow-1">
                  DELETE PROFILE
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <NetflixFooter />
      </>
    )
  }
}

export default Login

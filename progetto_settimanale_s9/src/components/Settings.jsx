import { Component } from 'react'
import NetflixNavbar from './NetflixNavbar'
import NetflixFooter from './NetflixFooter'
import { Container, Row, Col, Button } from 'react-bootstrap'
import avatar from '../assets/avatar.png'

class Settings extends Component {
  render() {
    return (
      <>
        <NetflixNavbar activeLink="Settings" />
        <Container className="my-5 px-4 px-md-0">
          <Row>
            <Col className="p-0">
              <h1>Account</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <hr />
            <Col xs={12} md={4} className="p-0">
              <h4 className="mb-2">MEMBERSHIP & BILLING</h4>{' '}
              <Button variant="secondary" className="mb-3">
                Cancel Membership
              </Button>
            </Col>
            <Col xs={12} md={8} className="p-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-2 fw-bold">student@strive.school</p>
                  <p className="mb-2">Password: ********</p>
                  <p className="m-0">Phone: 321 044 1279</p>
                </div>
                <div className="text-end">
                  <a className="linkSettings mb-2">Change account email</a>
                  <a className="linkSettings mb-2">Change password</a>
                  <a className="linkSettings m-0">Change phone number</a>
                </div>
              </div>
              <hr />

              <div className="d-flex justify-content-between">
                <div>
                  <p className="m-0 fw-bold">
                    <i className="bi bi-paypal"></i> admin@strive.school
                  </p>
                </div>
                <div className="text-end">
                  <a className="linkSettings mb-2">Update payment info</a>
                  <a className="linkSettings m-0">Billing details</a>
                </div>
              </div>
              <hr />

              <div className="d-flex justify-content-end mb-3">
                <div className="text-end">
                  <a className="linkSettings mb-2">
                    Redeem gift card or promo code
                  </a>
                  <a className="linkSettings m-0">Where to buy gift cards</a>
                </div>
              </div>
            </Col>
            <hr className="m-0" />
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={4} className="p-0">
              <h4 className="mb-3">PLAN DETAILS</h4>{' '}
            </Col>
            <Col xs={12} md={8} className="p-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-2 fw-bold">
                    Premium <i className="bi bi-badge-hd"></i>
                  </p>
                </div>
                <div className="text-end">
                  <a className="linkSettings mb-2">Change plan</a>
                </div>
              </div>
            </Col>
            <hr className="m-0" />
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={4} className="p-0">
              <h4 className="mb-3">SETTINGS</h4>{' '}
            </Col>
            <Col xs={12} md={8} className="p-0">
              <div className="d-flex mb-3">
                <div>
                  <a className="linkSettings mb-2">Parental controls</a>
                  <a className="linkSettings mb-2">Test participation</a>
                  <a className="linkSettings mb-2">Manage download devices</a>
                  <a className="linkSettings mb-2">Activate a device</a>
                  <a className="linkSettings mb-2">
                    Recent device streaming activity
                  </a>
                  <a className="linkSettings m-0">Sign out of all devices</a>
                </div>
              </div>
            </Col>
            <hr className="m-0" />
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={4} className="p-0">
              <h4 className="mb-3">MY PROFILE</h4>{' '}
            </Col>
            <Col xs={12} md={8} className="p-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="mb-2 fw-bold">
                    <img
                      src={avatar}
                      alt="Avatar"
                      height="40"
                      className="me-3"
                    />
                    Strive Student
                  </p>
                </div>
                <div className="text-end">
                  <a className="linkSettings mb-2">Manage profiles</a>
                  <a className="linkSettings mb-2">Add profile email</a>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <a className="linkSettings mb-2">Language</a>
                  <a className="linkSettings mb-2">Playback settings</a>
                  <a className="linkSettings mb-2">Subtitle appearance</a>
                </div>
                <div className="text-end">
                  <a className="linkSettings mb-2">Viewing activity</a>
                  <a className="linkSettings m-0">Ratings</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <NetflixFooter />
      </>
    )
  }
}

export default Settings

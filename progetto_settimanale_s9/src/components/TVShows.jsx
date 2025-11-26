import { Component } from 'react'
import {
  Row,
  Col,
  Dropdown,
  DropdownButton,
  Button,
  ButtonGroup,
} from 'react-bootstrap'

class TVShows extends Component {
  render() {
    return (
      <Row className="py-4 px-4">
        <Col className="d-flex p-0">
          <h1 className="text-light m-0 me-4">TV Shows</h1>
          <DropdownButton
            id="dropdown-basic-button"
            title="Genres"
            variant="outline-light"
            className="d-flex align-items-center"
          >
            <Dropdown.Item href="#/action-1">Horror</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Thriller</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col className="text-end p-0">
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-light">
              <i className="bi bi-list"></i>
            </Button>
            <Button variant="outline-light">
              <i className="bi bi-grid-fill"></i>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    )
  }
}

export default TVShows

import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'
import logo from '../assets/netflix_logo.png'
import account from '../assets/avatar.png'
import accountKids from '../assets/kids_icon.png'

function NetflixNavbar(props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      data-bs-theme="dark"
      className="bg-nav"
    >
      <Container fluid className="px-4">
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#"
              active={props.activeLink === 'Home' ? true : false}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#"
              active={props.activeLink === 'TvShows' ? true : false}
            >
              TV Shows
            </Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Add</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
            <Nav.Link
              href="#"
              active={props.activeLink === 'Settings' ? true : false}
            >
              Settings
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="#">KIDS</Nav.Link>
            <Nav.Link href="#">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <Nav.Link
              href="#"
              active={props.activeLink === 'Edit' ? true : false}
              className="me-3"
            >
              Edit Profile
            </Nav.Link>
            <DropdownButton
              id="dropdown-basic-button"
              title="Account"
              variant="outline-light"
            >
              <Dropdown.Item href="#/action-1">
                <img src={account} alt="account" height="40" />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">
                <img src={accountKids} alt="account" height="40" />
              </Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixNavbar

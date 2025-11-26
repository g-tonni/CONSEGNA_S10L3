import {
  Container,
  Nav,
  Navbar,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/netflix_logo.png'
import account from '../assets/avatar.png'
import accountKids from '../assets/kids_icon.png'

function NetflixNavbar() {
  const location = useLocation()

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
            <Link
              className={
                'nav-link ' + (location.pathname === '/' ? 'active' : '')
              }
              to="/"
            >
              Home
            </Link>
            <Link className="nav-link" to="">
              TV Shows
            </Link>
            <Link className="nav-link" to="#">
              Movies
            </Link>
            <Link className="nav-link" to="#">
              Recently Add
            </Link>
            <Link className="nav-link" to="#">
              My List
            </Link>
            <Link
              className={
                'nav-link ' +
                (location.pathname === '/settings' ? 'active' : '')
              }
              to="/settings"
            >
              Settings
            </Link>
          </Nav>
          <Nav>
            <Link
              className={
                'nav-link ' + (location.pathname === '/search' ? 'active' : '')
              }
              to="/search"
            >
              <i className="bi bi-search"></i>
            </Link>
            <Link className="nav-link" to="#">
              KIDS
            </Link>
            <Link className="nav-link" to="#">
              <i className="bi bi-bell-fill"></i>
            </Link>
            <Link
              className={
                'nav-link me-3 ' +
                (location.pathname === '/login' ? 'active' : '')
              }
              to="/login"
            >
              Edit Profile
            </Link>
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

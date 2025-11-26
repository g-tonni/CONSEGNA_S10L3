import { Component } from 'react'
import NetflixNavbar from './NetflixNavbar'
import NetflixFooter from './NetflixFooter'
import NetflixMain from './NetflixMain'

class Home extends Component {
  render() {
    return (
      <>
        <NetflixNavbar activeLink="Home" />
        <NetflixMain />

        <NetflixFooter />
      </>
    )
  }
}

export default Home

import { Container } from 'react-bootstrap'
import TVShows from './TVShows'
import FilmRow from './FilmRow'
import FilmCarousel from './FilmCarousel'

const NetflixMain = function () {
  return (
    <Container fluid className="bg-dark min-vh-100">
      <TVShows title="Chosen for you" />
      <FilmCarousel titleRow="Harry Potter" filmName="Harry Potter" />
      <FilmCarousel titleRow="Star Wars" filmName="Star Wars" />
      <FilmCarousel titleRow="Halloween" filmName="Halloween" />
      <FilmCarousel titleRow="Horror" filmName="Horror" />
      <FilmCarousel titleRow="Shrek" filmName="Shrek" />
      <FilmCarousel titleRow="Ice Age" filmName="Ice Age" />
      {/*     <FilmRow titleRow="Harry Potter" filmName="Harry Potter" />
        <FilmRow titleRow="Star Wars" filmName="Star Wars" />
        <FilmRow titleRow="Halloween" filmName="Halloween" />
        <FilmRow titleRow="Horror" filmName="Horror" />
        <FilmRow titleRow="Shrek" filmName="Shrek" />
        <FilmRow titleRow="Ice Age" filmName="Ice Age" /> */}
    </Container>
  )
}

export default NetflixMain

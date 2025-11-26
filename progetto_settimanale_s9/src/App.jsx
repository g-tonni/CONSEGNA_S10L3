import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Settings from './components/Settings'
import NetflixNavbar from './components/NetflixNavbar'
import NetflixFooter from './components/NetflixFooter'
import NotFound from './components/NotFound'
import Details from './components/Details'
import Search from './components/Search'

function App() {
  return (
    <BrowserRouter>
      <NetflixNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/details/:filmID" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <NetflixFooter />
    </BrowserRouter>
  )
}

export default App

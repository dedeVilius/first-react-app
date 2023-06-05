// import logo from './images/logo.svg';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import './Pages/ContactUsPage/ContactUsPage.css';
import ContactUsPage from './Pages/ContactUsPage/ContactUsPage';
import './Pages/ProgramsPage/ProgramsPage.css'
import ProgramsPage from './Pages/ProgramsPage/ProgramsPage';
import StarterPage from './Pages/StarterPage/StarterPage';
import Container from './Components/Container/Container';

function App() {
  return (
    <div className="App">
      <Container>
        <nav className='main-navigation'>
          <ul className='nav-list'>
            <li className='nav-item'>
              <a href='/' className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <NavLink to='/starter' className='nav-link'>StarterPage</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/programs' className='nav-link'>Programs Page</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/contact-us' className='nav-link'>Contact Us Page</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/starter' element={<StarterPage />} />
          <Route path='/programs' element={<ProgramsPage title="Programos" />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='*' element={
            <div>
              <h1>404 error. Page not found</h1>
              <Link to='/'>Go Back to home page</Link>
            </div>
          } />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

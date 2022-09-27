import './App.css';
import NavBar from './Navbar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Experience from './Pages/Experience/Experience';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
// import PageNotFound from './Pages/PageNotFound/PageNotFound';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />

          <Route path="*" element={<Home />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

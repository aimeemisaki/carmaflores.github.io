import { Routes, Route } from 'react-router-dom';
import './index.css';
import LaunchPage from './components/LaunchPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import FashionStyling from './components/FashionStyling';
import Creative from './components/Creative';
import AboutContact from './components/AboutContact';

function App() {
  function videoStart () {
    document.querySelector('iframe').play()
}
  return (
    <>
      <NavBar />
      <Footer />
      <main 
      onMouseOver={videoStart}>
        <Routes>
            <Route path ='/' element={<LaunchPage />}/>
            <Route path ='/fashion-styling' element={<FashionStyling />} /> 
            <Route path ='/creative' element={<Creative/>} /> 
            <Route path='/about-contact' element= {<AboutContact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

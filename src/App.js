import { Routes, Route } from 'react-router-dom';
import './index.css';
import LaunchPage from './components/LaunchPage';
import NavBar from './components/NavBar';
import FashionStyling from './components/FashionStyling';
import Creative from './components/Creative';

function App() {
  function videoStart () {
    document.querySelector('video').play()
}
  return (
    <>
      <NavBar/>
      <main 
      onMouseOver={videoStart}>
        <Routes>
            <Route path ='/' element={<LaunchPage />}/>
            <Route path ='/fashion-styling' element={<FashionStyling />} /> 
            <Route path ='/creative' element={<Creative/>} /> 
        </Routes>
      </main>
    </>
  );
}

export default App;

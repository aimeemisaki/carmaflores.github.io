import { Routes, Route } from 'react-router-dom';
import './index.css';
import LaunchPage from './components/LaunchPage';
import NavBar from './components/NavBar'

function App() {
  return (
    <>
      <NavBar/>
      <main>
        <Routes>
            <Route path ='/' element={<LaunchPage />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;

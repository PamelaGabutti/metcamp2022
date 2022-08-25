import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import AboutMe from './pages/aboutme';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />} />
        <Route path='/aboutme' element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

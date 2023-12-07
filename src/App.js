import './App.css';
import ScrollToTop from './utils/ScrollToTop';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import About from './Components/About';
import Coaching from './Components/Coaching';

function App() {
  // ScrollToTop();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaching" element={<Coaching />} />
      </Routes>
    </Router>
  );
}

export default App;

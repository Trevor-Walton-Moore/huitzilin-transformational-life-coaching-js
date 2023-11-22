import './App.css';
import ScrollToTop from './utils/ScrollToTop';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NavBar from './Components/NavBar';

function App() {
  // ScrollToTop();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </Router>
  );
}

export default App;

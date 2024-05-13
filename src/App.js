import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Articles from './pages/Articles';
import TestState from './context/Teststate';

function App() {
  return (
    <>
    <TestState>
    <Router>
    <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/articles" element={<Articles />} />
    </Routes>
  </Router>
  </TestState>
    </>
  );
}

export default App;

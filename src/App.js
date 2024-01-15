import './App.css';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Resources from './pages/resources';
import Gallery from './pages/gallery';
import About from './pages/about';

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import HeroSec from './components/HeroSection';
// // import Header from './components/Header/Header';
// import Navbar from './components/Navbar/Navbar';
// import GlobalStyle from './globalStyles';
import Home from './pages';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;

import './style/App.css';
import Home from './home'
import Portfolio from './portfolio-page'
import Contact from './contact'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router baseline='/' >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

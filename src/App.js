import './style/App.css';
import Home from './home'
import Portfolio from './portfolio-page'
import Contact from './contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/margarethe" element={<Home />} />
        <Route exact path="/margarethe/portfolio" element={<Portfolio />} />
        <Route exact path="/margarethe/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

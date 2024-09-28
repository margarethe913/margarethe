import './style/App.css';
import Header from './components/header'
import Banner from './components/banner'
import About from './components/about';
import Portfolio from './components/portfolio';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Portfolio />
    </div>
  );
}

export default Home;
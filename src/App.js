import './App.css';
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/components/Home/Home'
import About from'../src/components/About/About'
import Skills from '../src/components/Skills/Skills'
import Portfolio from '../src/components/Portfolio/Portfolio'
import Contact from '../src/components/Contact/Contact'
import Footer from '../src/components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

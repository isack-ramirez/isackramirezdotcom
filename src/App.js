import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'; 
import HeroPane from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroPane/>
    </div>
  );
}

export default App;

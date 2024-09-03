import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Header from './containers/Header/Header';
import Service from './pages/Services/Service/Service';
import WorkFlow from './pages/Services/WorkFlow/WorkFlow';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <WorkFlow/>
      <Contact/>
    </div>
  );
}

export default App;
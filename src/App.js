import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Studies from './components/Studies/Studies';
import Lessons from './components/Lessons/Lessons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" Component={Landing}/>
      <Route exact path="/projects" Component={Projects}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/studies" Component={Studies}/>
      </Routes>
    </Router>
  );
}



export default App;

import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Studies from './components/Studies/Studies';
import Lessons from './components/Lessons/Lessons';
import { BrowserRouter as  Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/studies" element={<Studies/>}/>
      <Route path="/lessons" element={<Lessons/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

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
      <Route path="/" element={<Landing/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/studies" element={<Studies/>}/>
      <Route path="/lessons" element={<Lessons/>}/>
      </Routes>
    </Router>
  );
}

// <Router>
//       <div>
//         <NavTabs />
//         {/* Wrap Route elements in a Routes component */}
//         <Routes>
//           {/* Define routes using the Route component to render different page components at different paths */}
//           {/* Define a default route that will render the Home component */}
//           <Route path="/" element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="blog" element={<Blog />} />
//           {/* Define a route that will have descendant routes */}
//           <Route path="contact/*" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>

export default App;

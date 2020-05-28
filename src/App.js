import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar'
import Personal from './Personal';
import About from './About';
import Projects from './Projects'
import Contact from './Contact'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="app-inside">
        <Route exact path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/personal" component={Personal} />
        <Route path="/contact" component={Contact} />
        </div>
        <div className="footer">
        <Link to="/contact" className="contact">Contact</Link>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;

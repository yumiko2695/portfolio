import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar'
import Personal from './Personal';
import About from './About';
import Projects from './Projects'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/forfun" component={Personal} />
        <div className="footer">
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;

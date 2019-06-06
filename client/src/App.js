import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route, withRouter } from 'react-router-dom';
import Pictures from './components/Pictures';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home}></Route>
      <Route path="/pictures" component={Pictures}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Footer />
    </div>
  );
}

export default withRouter(App);

import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route, withRouter } from 'react-router-dom';
import Videos from './components/Merch';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home}></Route>
      <Route path="/videos" component={Videos}></Route>
      <Footer />
    </div>
  );
}

export default withRouter(App);

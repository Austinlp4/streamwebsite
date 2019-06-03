import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route, withRouter } from 'react-router-dom';
import Merch from './components/Merch';

function App() {
  return (
    <div className="App">
      <Nav />
      <Merch/>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default withRouter(App);

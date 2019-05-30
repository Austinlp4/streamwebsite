import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import { Route, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default withRouter(App);
